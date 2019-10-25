import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        {/* 这一块区域是给header用的 */}
        <div>Toolbar, SideDrawer, Backdrop</div>
        {/* 这一块区域是给核心内容用的，比如说burger builder page ? main element是啥 */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;