import React, { useEffect, useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



const Recharts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/20cffe49')
         .then(response => response.json())
         .then(data => setData(data));
    })

    return (

        
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 55,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
       

    );
};

export default Recharts;