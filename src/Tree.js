import React, {useState} from "react";
import CollapseButton from "./CollapseButton";

function Tree({
                  items,
                  collapsed = false,
                  name = null,
                  isLast = true,
                  subElement = false,
                  toggleParent = true,
                  depth = 0,
                  step = 10,
              }) {

    const [isCollapsed, setIsCollapsed] = useState(collapsed)

    return (
        <div
            style={{marginLeft: subElement ? depth * step : step + 'px'}}
            className={toggleParent ? '' : 'collapsed'}
        >
            {name ? <strong onClick={() => setIsCollapsed(!isCollapsed)}>{name}: </strong> :
                <span onClick={() => setIsCollapsed(!isCollapsed)}>&nbsp;&nbsp;</span>}

            {!isCollapsed && <small onClick={() => setIsCollapsed(!isCollapsed)}>click for more</small>}
            {Object.keys(items).map((v, i, a) =>
                typeof items[v] == 'object' ? (
                    <Tree
                        key={v}
                        items={items[v]}
                        isLast={i === a.length - 1}
                        name={Array.isArray(items) ? null : v}
                        subElement
                        toggleParent={toggleParent && isCollapsed}
                        depth={depth + 1}
                    />
                ) : (
                    <p
                        style={{marginLeft: depth + 'px'}}
                        className={isCollapsed ? '' : 'collapsed'}
                    >
                        {Array.isArray(items) ? '' : <strong>{v}: </strong>}
                        {items[v]}
                    </p>
                )
            )}
        </div>
    )
}

export default Tree