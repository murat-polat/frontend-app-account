import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import BasePanel from './BasePanel';

import messages from '../IdVerification.messages';

function SubmittedPanel(props) {
  const panelSlug = 'submitted';
  return (
    <BasePanel
      name={panelSlug}
      title={props.intl.formatMessage(messages['id.verification.submitted.title'])}
    >
      <p>
        {props.intl.formatMessage(messages['id.verification.submitted.text'])}
      </p>
      <a className="btn btn-primary" href={`${getConfig().LMS_BASE_URL}/dashboard`}>
        {props.intl.formatMessage(messages['id.verification.return'])}
      </a>
    </BasePanel>
  );
}

SubmittedPanel.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SubmittedPanel);
