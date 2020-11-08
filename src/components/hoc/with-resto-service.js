import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}>

                               </Wrapped>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    };
};

export default WithRestoService;