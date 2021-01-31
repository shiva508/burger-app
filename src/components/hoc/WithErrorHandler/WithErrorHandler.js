import React, { Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import Aux from '../Aux/Aux';
import AxiosFirebaseFactory from '../../Factory/AxiosFirebaseFactory/AxiosFirebaseFactory';

const WithErrorHandler=(WrappedComponent,axios) =>{
    return class extends Component{
        state = {
            errorState: null
        }
        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({
                    errorState:null
                })
                return request;
            })
            axios.interceptors.response.use(response => {
                return response;
            }, error => {
                this.setState({
                    errorState:error
                })
                
            });

        }
        errorConfirmedHandler = () => {
            this.setState({
                errorState:null
            })
        }
        render() {
            return (
               <Aux>
                    <Modal
                        show={this.state.errorState}
                        modalClosed={ this.errorConfirmedHandler}>
                    {this.state.errorState !=null ?this.state.errorState.message:''}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux> 
            )
        }
    }
  }
export default WithErrorHandler;