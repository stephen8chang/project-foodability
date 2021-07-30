import React, {Component} from "react";
import Wrapper from "../components/Wrapper";

class Users extends Component {
    render() {
        return (
            <Wrapper>
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
            </Wrapper>
        );
    }
}

export default Users;