import PropTypes from 'prop-types';
import styled from 'styled-components';

// import withTheme from 'styles/utils/withTheme';
// import { classNameTypes } from 'shared/shapes';

// const getBackground = props => (props.withBackground ? `${props.theme.backgroundColor}` : props.theme.white);

const Huge = styled.span`
  font-size: 5rem;
  color: black;
`;

Huge.defaultProps = {
    className: null,
    children: null,
};

Huge.propTypes = {
    children: PropTypes.node,
};

export default Huge;
