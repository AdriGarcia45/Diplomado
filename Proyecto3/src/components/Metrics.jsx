function Metrics() {
    const metrics = [
        {name: "Accuracy", value: 0.75},
        {name: "Precision", value: 0.34},
        {name: "Recall", value: 0.79},
        {name: "F1 Score", value: 0.47},
        {name: "ROC-AUC", value: 0.85}

    ];
    return (
        <div className='card shadow-sm'>
            <div className='card-body'>
                <h2 className='card-title mb-4'>
                    Métricas del modelo
                    </h2>
                    {metrics.map((metric, index) => (
                        <div key={index} className='d-flex justify-content-between border-botom py-2'>
                            <span>{metric.name}</span>
                            <strong>{metric.value}</strong>
                        </div>

                    ))}
            </div>
    </div>
    );
}
export default Metrics;