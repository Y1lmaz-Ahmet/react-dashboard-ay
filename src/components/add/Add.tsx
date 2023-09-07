import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "../add/add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='add'>
      <div className='modal'>
        <span className='close' onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className='item' key={column.field}>
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  name={column.field}
                  placeholder={column.field}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
