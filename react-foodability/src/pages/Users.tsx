import React, {Component} from "react";

class Users extends Component {
    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Users;