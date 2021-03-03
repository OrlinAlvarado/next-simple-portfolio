import Layout from '../components/Layout';

const _error = ({ statusCode }) =>  (
    <Layout footer={ false }>
        {
            statusCode ? (
                <p className="text-center">Could not load your page: Status Code {statusCode}</p>
            ) : (
                <p className="text-center">Could not load this page</p>
            )
        }
        
    </Layout>
)

export default _error;