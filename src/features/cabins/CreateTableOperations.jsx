import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CreateTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterfeild={"discount"}
        filterBy={[
          { value: "all", label: "All" },
          { value: "No-Discount", label: "No Discount" },
          { value: "With-Discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name(A-Z)" },
          { value: "name-desc", label: "Sort By Name(Z-A) " },
          { value: "regularPrice-asc", label: "Sort By Price asc" },
          { value: "regularPrice-desc", label: "Sort By Price desc" },
          { value: "maxCapacity-asc", label: "Sort By Capacity asc" },
          { value: "maxCapacity-desc", label: "Sort By Capacity desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CreateTableOperations;
