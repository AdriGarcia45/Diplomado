import { useState } from 'react'
import { predictBot } from '../utils/fakeModel'

function PredictionForm() {
    const [followers, setFollowers] = useState('');
    const [result, setResult] = useState('');

    const handlePredict = () => {
        const prediction = predictBot(Number(followers));
        setResult(prediction);
    };

    return (
        <div className='card shadow-sm'>
            <div className='card-body'>
                <h2 className='mb-4'>Predicción</h2>

                <input
                    type="number"
                    className='form-control mb-3'
                    placeholder='Followers'
                    value={followers}
                    onChange={(e) => setFollowers(e.target.value)}
                />

                <button
                    className='btn btn-primary'
                    onClick={handlePredict}>Predecir</button>

                {result && (
                    <div className='alert alert-info mt-4'>
                        Resultado: <strong>{result}</strong>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PredictionForm;