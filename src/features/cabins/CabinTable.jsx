import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  //Filter
  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filteredValue === "all") filteredCabins = cabins;
  if (filteredValue === "With-Discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filteredValue === "No-Discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  //Sorting

  const sortBy = searchParams.get("sortBy") || "startData-asc";
  const [feild, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[feild] - b[feild]) * modifier
  );
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
