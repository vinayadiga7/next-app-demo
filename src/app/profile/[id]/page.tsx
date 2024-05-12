export default function ProfileIdPage(props: any) {
  const { params } = props;
  console.log("From ProfileIdPage ---------> ", props);
  return (
    <div className="text-xl h-screen flex justify-center items-center">
      Welcome <span className="px-2 bg-blue-800">{params.id}</span>
    </div>
  );
}
