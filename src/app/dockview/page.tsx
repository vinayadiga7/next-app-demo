"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  DockviewReact,
  DockviewReadyEvent,
  DockviewApi,
  IDockviewPanelProps,
  DockviewPanelApi,
  IDockviewPanel,
  IDockviewPanelHeaderProps,
} from "dockview";

export default function DockViewPage() {
  const [dockviewApi, setDockviewApi] = useState<DockviewApi>();
  let api = useRef<DockviewApi>();

  useEffect(() => {
    api = dockviewApi;
  }, [dockviewApi]);

  const handleAddPanel = (props: any) => {
    console.log(
      "from handleAddPanel --------> ",
      dockviewApi,
      " props ------> ",
      props.panel,
      " api ---------> ",
      api
    );
    api?.current?.addPanel({
      id: "Extra Panel",
      component: "panelOne",
      title: "extra panel",
    });
  };

  // define the components to be displayed
  const components = {
    panelOne: (props: IDockviewPanelProps) => {
      // each panel has an api which is used to control specific features on that panel
      const api: DockviewPanelApi = props.api;
      console.log("From Panel One component ---------> ", props);
      const handleTitleChange = () => {
        api.updateParameters({
          panelTitle:
            props.params.panelTitle === "Wissen" ? "Windows" : "Wissen",
        });
      };

      const addPanel = (e) => {
        props.params.newDockviewApi.addPanel({
          id: `CA-${e.target.value}`,
          component: "panelOne",
          title: `CA-${e.target.value}`,
          params: {
            panelTitle: `CA-${e.target.value}`,
            newDockviewApi: props.params.newDockviewApi,
          },
        });
      };

      return (
        <div className="text-white p-8">
          This is from Panel one
          <ul>
            <li value="12345" onClick={addPanel}>
              CA-12345
            </li>
            <li value="12346" onClick={addPanel}>
              CA-12346
            </li>
            <li value="12347" onClick={addPanel}>
              CA-12347
            </li>
          </ul>
          <button
            className="bg-white text-black p-2 rounded-md"
            onClick={handleTitleChange}
          >
            Toggle title
          </button>
        </div>
      );
    },
    panelTwo: (props: IDockviewPanelProps) => {
      const api: DockviewPanelApi = props.api;
      return <div>This is from Panel two</div>;
    },
    panelThree: (props: IDockviewPanelProps) => {
      const api: DockviewPanelApi = props.api;
      return <div>This is from Panel three</div>;
    },
  };

  const tabComponents = {
    default: (props: IDockviewPanelHeaderProps) => {
      // console.log("from tab components ------> ", props);
      return (
        <div>
          <div>{props.params.panelTitle}</div>
        </div>
      );
    },
  };

  function onReady(event: DockviewReadyEvent) {
    console.log("onReady got called");
    // please save the api in the state or ref for later usage
    const api: DockviewApi = event.api;
    setDockviewApi(api);
    const panelOne: IDockviewPanel = api.addPanel({
      id: "panelOne",
      component: "panelOne",
      title: "Panel One",
      tabComponent: "default",
      params: {
        panelTitle: "Windows",
        newDockviewApi: api,
      },
    });
    const panelTwo: IDockviewPanel = api.addPanel({
      id: "panelTwo",
      component: "panelTwo",
      title: "Panel Two",
      position: { referencePanel: panelOne },
      tabComponent: "default",
      params: {
        panelTitle: "Mac",
      },
    });

    const panelThree: IDockviewPanel = api.addPanel({
      id: "panelThree",
      component: "panelThree",
      title: "Panel Three",
      position: {
        referencePanel: panelTwo,
      },
      tabComponent: "default",
      params: {
        panelTitle: "Ubuntu",
      },
    });
  }

  console.log("From DockviewPage component -----> ", dockviewApi);
  return (
    <div className="dockview-container">
      <DockviewReact
        onReady={onReady}
        components={components}
        className="dockview-theme-abyss"
        tabComponents={tabComponents}
      />
    </div>
  );
}
