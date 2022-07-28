import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../Redux/user/userActions'

const UserView = ({ userData, fetchUsers }) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
            userData.loading ? (
            <h1>Loading</h1>
            ) : userData.error ? (
            <h1> {userData.error}</h1>
            ) : (
            <div>
                <h1>User List</h1>
                <div>
                    {userData &&
                        userData.users &&
                        userData.users.map(user =>
                            <p key={user.id}>{user.name}</p>)}
                </div>
            </div>
            )
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView)

