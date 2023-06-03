document.addEventListener('DOMContentLoaded', function() {
  // Initialize the Dash app
  const app = new dash.Dash();

  // Define the layout of your Dash app
  app.layout = html.Div([
    // Add your Dash components here
    html.H1('US Domestic Airline Flights Performance', {style: {'textAlign': 'center', 'color': '#503D36', 'fontSize': '24px'}}),
    html.Div([
      html.Div([
        html.Div([
          html.H2('Report Type:', {style: {'marginRight': '2em'}}),
        ]),
        dcc.Dropdown(
          {id: 'input-type'},
          {options: [
            {label: 'Yearly Airline Performance Report', value: 'OPT1'},
            {label: 'Yearly Airline Delay Report', value: 'OPT2'}
          ]},
          {placeholder: 'Select a report type', style: {'textAlign': 'center', 'width': '80%', 'padding': '3px', 'fontSize': '20px'}}
        ),
      ], {style: {'display': 'flex'}}),
      html.Div([
        html.Div([
          html.H2('Choose Year:', {style: {'marginRight': '2em'}}),
        ]),
        dcc.Dropdown(
          {id: 'input-year'},
          // Update dropdown values using list comprehension
          {options: [
            {label: '2005', value: '2005'},
            {label: '2006', value: '2006'},
            {label: '2007', value: '2007'},
            {label: '2008', value: '2008'},
            {label: '2009', value: '2009'},
            {label: '2010', value: '2010'},
            {label: '2011', value: '2011'},
            {label: '2012', value: '2012'},
            {label: '2013', value: '2013'},
            {label: '2014', value: '2014'},
            {label: '2015', value: '2015'},
            {label: '2016', value: '2016'},
            {label: '2017', value: '2017'},
            {label: '2018', value: '2018'},
            {label: '2019', value: '2019'},
            {label: '2020', value: '2020'}
          ]},
          {placeholder: 'Select a year', style: {'width': '80%', 'padding': '3px', 'fontSize': '20px', 'textAlignLast': 'center'}}
        ),
      ], {style: {'display': 'flex'}}),
    ]),
    html.Div([], {id: 'plot1'}),
    html.Div([
      html.Div([], {id: 'plot2'}),
      html.Div([], {id: 'plot3'}),
    ], {style: {'display': 'flex'}}),
    html.Div([
      html.Div([], {id: 'plot4'}),
      html.Div([], {id: 'plot5'}),
    ], {style: {'display': 'flex'}}),
  ]);

  // Define the callback function
  app.callback(
    [
      {output: {id: 'plot1', property: 'children'}},
      {output: {id: 'plot2', property: 'children'}},
      {output: {id: 'plot3', property: 'children'}},
      {output: {id: 'plot4', property: 'children'}},
      {output: {id: 'plot5', property: 'children'}}
    ],
    [
      {input: {id: 'input-type', property: 'value'}},
      {input: {id: 'input-year', property: 'value'}}
    ],
    (opt1, opt2) => {
      // Add your callback function code here
    }
  );

  // Run the Dash app
  app.run_server({ host: '0.0.0.0', port: 8050 });
});
