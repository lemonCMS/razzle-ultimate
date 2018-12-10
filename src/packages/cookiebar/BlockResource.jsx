import React from 'react';


class BlockResource extends React.Component {
  render() {
    return (
      <div className={'changeSettings'}
           onClick={(event) => {
             window.scrollTo(0, 0);
             event.stopPropagation();
             event.preventDefault();
             return false;
           }}
           role={'button'}
           tabIndex={0}
      >
        <div>
          {' '}
          Om deze resource te kunnen zien moet u de
          {' '}
          <a href={`${(typeof navigator !== 'undefined' ? window.location.href.split('#')[0] : '')}#gdprSettings`}>cookie
            instellingen</a>
          {' '}
          op <strong>optimaal</strong> zetten.
        </div>
      </div>
    );
  }
}

BlockResource.propTypes = {};
BlockResource.defaultProps = {};

export default BlockResource;
