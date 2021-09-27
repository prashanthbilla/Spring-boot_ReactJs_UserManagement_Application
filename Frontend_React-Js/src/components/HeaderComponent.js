import React, { Component } from 'react'

export class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state={


        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <h1 class="headertekst" ><b>User Registration App</b></h1>
                        </div>

                    </nav>
                </header>
                
            </div>
        )
    }
}

export default HeaderComponent
