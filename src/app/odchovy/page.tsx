import ContainerBreeds from "@/ui/odchovy/container-breeds";

const OdchovyPage = () => {
  return (
    <div className="wrapper mx-auto primary-bg max-width pt-8 px-8">
      <h2 className="text-2xl font-bold pb-6">Odchovy Švýcaského ovčáka</h2>
      <main>
        <ContainerBreeds />{" "}
      </main>
    </div>
  );
};

export default OdchovyPage;
