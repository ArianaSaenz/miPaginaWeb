import dobledonas from "../Desserts/donass.jpeg";
function Desserts() {
    return (
        <div>
            className="dessert-banner"
            style={{
                backgroundImage: `url(${dobledonas})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                marginBottom: '20px',
            }}

            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                Deliciosos Postres
            </h1>

        </div>
    )
}

export default Desserts;