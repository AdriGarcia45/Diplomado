import {fakeUsers} from "../data/fakeData";
function DataTable(){
    return(
        <div className="card shadow-sm mt-4">
            <div className="card-body">
                <h2 className="mb-4">Dataset</h2>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Followers</th>
                            <th>Following</th>
                            <th>Label</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeUsers.map((user)=> (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.followers}</td>
                                <td>{user.following}</td>
                                <td>{user.Label}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default DataTable;