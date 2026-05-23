import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
function featureImportance(){
    const data = [
        {name: "verified", value: 0.68},
        {name: "desc_legth", value: 0.44},
        {name: "followers", value:0.80}
    ];
    return(
            <div className="card shadow-sm mt-4">
        <div className="card-body">
<h2 className="mb-4">Feature Importance</h2>
<BarChart width={500} height={300} data={data}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value"/>
</BarChart>
</div>
</div>
    )
}
export default featureImportance;
