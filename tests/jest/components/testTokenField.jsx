import React from 'react';
import renderer from 'react-test-renderer';
import TokenField from 'Components/TokenField';
import { noop } from '@deskpro/react-components/dist/utils';

const countries = [
  { label: 'Austria', value: 'AT' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'Greece', value: 'GR' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Italy', value: 'IT' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Malta', value: 'MT' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Romania', value: 'RO' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sweden', value: 'SE' },
  { label: 'United Kingdom', value: 'GB' }
];

const tokenTypes = [
  {
    id:          'date',
    widget:      'DateTimeInput',
    props:       {},
    description: 'Date the ticket was submitted'
  },
  {
    id:          'date-ticket-created',
    widget:      'DateTimeInput',
    props:       {},
    description: 'When the ticket was created'
  },
  {
    id:          'date-ticket-resolved',
    widget:      'DateTimeInput',
    props:       {},
    description: 'When the ticket was resolved'
  },
  {
    id:          'user-message',
    widget:      'TextInput',
    props:       {},
    description: 'Message entered initially by the user'
  },
  {
    id:     'attach-size',
    widget: 'NumericRangeInput',
    props:  {
      unitPhrase:       'MB',
      convertFromValue: value => Math.round(value / 1024 / 1024),
      convertToValue:   value => value * 1024 * 1024,
    }
  },
  {
    id:     'country',
    widget: 'SelectInput',
    props:  {
      dataSource: {
        getOptions: countries,
      },
      renderHeader: <h3>Countries</h3>,
      showSearch:   false
    },
  },
  {
    id:          'user-waiting',
    widget:      'DurationInput',
    props:       {},
    description: 'Time waited by user'
  }
];

const value = [
  {
    type:  'date',
    value: {
      inputType: 'preset',
      preset:    'yesterday',
    }
  },
  {
    type:  'TEXT',
    value: 'pricing',
  },
  {
    type:  'user-message',
    value: 'help upgrading'
  }
];

it('+++capturing Snapshot of TokenField', () => {
  const renderedValue = renderer.create(
    <div>
      <TokenField
        tokenTypes={tokenTypes}
        value={value}
        onChange={noop}
      />
    </div>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
