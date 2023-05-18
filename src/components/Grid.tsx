import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "body", headerName: "Body", width: 400 },
];

const Grid = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <DataGrid
          rows={data}
          columns={columns}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoHeight
          className="border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Grid;
