import React, { PropTypes } from 'react';
import { TagCloud } from 'react-tagcloud';
import { connect } from 'react-redux';
import Avatar from '../../components/Avatar/Avatar'
import Score from '../../components/Score/Score'

import styles from './ShowResultsPage.css';

// Import Actions
import { fetchResult } from '../../AnalysisActions';

// Import Selectors
import { getResult } from '../../AnalysisReducer';

export function ShowResultsPage(props) {

  if (!props.result) {
    return <div>Profile not found</div>;
  }

  let languagesCloud = [];
  for (let key in props.result.languages) {
    languagesCloud.push({value: key, count: props.result.languages[key]});
  }

  return (
    <div className={styles.wrapper}>
      <Avatar profileData={props.result}/>
      <div className={styles.statsWrapper}>
        <Score score={83} />
        <TagCloud
          minSize={30}
          maxSize={50}
          tags={languagesCloud}
        />
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
ShowResultsPage.need = [params => {
  return fetchResult(params.username);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    result: getResult(state, props.params.username),
  };
}

ShowResultsPage.propTypes = {
  result: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ShowResultsPage);
