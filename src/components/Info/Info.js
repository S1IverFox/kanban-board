import React from 'react';
import './Info.css'

    const InfoBlock = (props) => {
        let changeActive = () => {
            window.history.back()
        }
        let createDate = new Date().toDateString()
        return (
            <div className="info-wrapper">
                <div className="infoblock">
                <span className="close" onClick={changeActive}>✖</span>
                <h3>Items: {props.match.params.name}</h3>
                <span>Created at {createDate}</span>
                
                {props.items.map((item, id) => {
                        return (
                            <div className="items-list" key={id}>{item}</div>
                        )
                    })
                }
                </div> 
              
            </div>
            )
        // let createDate = new Date().toDateString()
        // // let input = <Input showInput={this.props.showInput} onChange={this.description}/>
        // let description = () => {
        //     return (
        //      <textarea placeholder='Добавить описание'></textarea>)}
             
        //     return (
        //         <div>
                    
        //             <h3>{props.match.params.item}</h3>
        //             <span>Created at {createDate}</span>
        //             <div>
        //                 <Button btnType='edit' btnText='Edit' btnStatus={true} onClickBtn={description}></Button>
        //                 <Button btnType='close' btnText='✖' btnStatus={true} onClickBtn={changeActive}></Button>
        //             </div>
        //             {props.items.map((id) => {
        //                 return (
        //                     <div key={id}>
                                
        //                     </div>
        //                 )})}
        //                 {/* {input} */}
        //         </div>
        //     )
    }

//}

export default InfoBlock