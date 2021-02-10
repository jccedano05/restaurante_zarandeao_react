import React from 'react'
import { SidebarAdministrator } from '../dashboard/SidebarAdministrator'
import { SectionDishAdmin } from './SectionDishAdmin'

export const DishesAdminScreen = () => {
    return (
        <>
            <div className="d-flex">
            
                <div >
                    <SidebarAdministrator /> 
                </div>

                <div className="containter ml-5" >
                    <SectionDishAdmin />
                </div>
            </div>
        </>
    )
}
 