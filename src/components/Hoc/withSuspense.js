import React from "react";

const withSuspense = (Component) =>(props) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
}/*rremii 19792005Artem*/
export default withSuspense