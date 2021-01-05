import React, {Component} from "react";


class UserComponent extends Component {
        render(){
    let {item, cls} = this.props;

        return(
            <div className = {cls}>

               <div>
               id : {item.id},
               Name :{item.name},
               Age:{item.age},
               Status:{item.status.toString()},
               ADDRESS:
               city:{item.address.city},
               street:{item.address.street},
               house: {item.address.number}
               </div>
           </div>
        )
      }

}

export default  UserComponent;