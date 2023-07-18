import DefaultLayout from "@/layouts/default.layout";
import HelloWorld from "@/components/hello-world";

export default function Index() {
  return (
    <HelloWorld />
  );
}

Index.getLayout = function getLayout(page: any) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
