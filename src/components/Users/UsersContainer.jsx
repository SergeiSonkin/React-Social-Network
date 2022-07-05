import React from 'react';
import { followAC, unsubscribeAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC  } from '../../redux/usersReducer';
import store, { userPage } from '../../redux/reduxStore';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)    
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    
    render() {
        

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize} 
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}  
                      follow={this.props.follow}  
                      unsubscribe={this.props.unsubscribe}  
                      />
    }
}

let mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unsubscribe: (userId) => {
            dispatch(unsubscribeAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);