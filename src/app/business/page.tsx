"use client";

import { columns, data, DataType } from "@/mocks/table.mock";
import Table, { ColumnsType } from "antd/lib/table";
import { useMemo, useState } from "react";

const Business = () => {
  const [columnsRender, setColumns] = useState<ColumnsType<DataType>>();
  const [dataSource, setDateSource] = useState<DataType[]>([]);

  useMemo(() => {
    function execute() {
      setColumns(columns);
      setDateSource(data);
    }

    execute();
  }, []);

  return <Table columns={columnsRender} dataSource={dataSource} />;
};

export default Business;
