import React, { useState } from 'react';
import {
	ProSidebar,
	Menu as MenuSidebar,
	MenuItem,
	SidebarHeader,
} from 'react-pro-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import {HiHome} from 'react-icons/hi';
import 'react-pro-sidebar/dist/css/styles.css';
import './styles.css';
export default function Menu() {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<ProSidebar collapsed={collapsed} className="bg-dark">
			<SidebarHeader>
				<div className="p-1 d-flex justify-content-between">
					{!collapsed ? (
						<img
							src="https://pymohub.com/wp-content/uploads/2021/07/logo-negro.png"
							width="75%"
							alt=""
						/>
					) : null}
					<button
						onClick={() => setCollapsed(!collapsed)}
						className={
							!collapsed ? 'btn-burguer' : 'btn-burguer-collapsed'
						}
					>
						<GiHamburgerMenu />
					</button>
				</div>
			</SidebarHeader>
            <MenuSidebar>
                <MenuItem className="menu-item-active" icon={<HiHome fontSize="20px"/>} >
                    <div className="menu-item-title">Home</div>
                </MenuItem>
            </MenuSidebar>
		</ProSidebar>
	);
}
