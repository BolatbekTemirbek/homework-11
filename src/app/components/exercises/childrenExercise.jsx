import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ListComponent = ({ children }) => {
    let i = 0;
    return React.Children.map(children, (child) => {
        i++;
        const numberList = `${i}) `;
        const config = { ...child.props, n: numberList };
        return React.cloneElement(child, config);
    });
};
ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ n }) => {
    return <div>{n}Компонент списка</div>;
};
Component.propTypes = {
    n: PropTypes.string
};
export default ChildrenExercise;
