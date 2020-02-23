import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

/*
You can inject any data values into this component for reuse:

(step1)simply delcare a const holding the data you wish to display in an array, just like const mechanisms in line 56.

(step2) update the placeholder text for the input field to describe the contents e.g. Modes of transport for a droplist of containing modes of transport.

(step3) update the phrase 'mechanisms' on line 111 to the name of the const you declared in step1.
*/


//const containing style options for dropdown.
const useStyles = makeStyles(theme => ({
  formControl: {
    //Adjust Margin for container box
    margin: theme.spacing(1),
    //sets the min width size of container box
    minWidth: 200,
    //sets the max width size of container box can expand to when multiples are selected
    maxWidth: 300,
  },
  noLabel: {
    //sets marginTop of the container box
    marginTop: theme.spacing(1)
  }
}));

//sets the height of drop down list, descrease to toggle scroll
const ITEM_HEIGHT = 68;

//sets the padding-top of drop down list
const ITEM_PADDING_TOP = 18;

//const that stores drop down options
const MenuProps = {
  PaperProps: {
    //custom css styling for the dropdown, add/remove as you wish
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
      color: '#221f20',
      background: 'white'
    }
  }
};

//const storing array of data options for label
const mechanisms = [
  "ABRASION",
  "BLUNT",
  "BURN",
  "FROST",
  "GUN SHOT",
  "LACERATION",
  "RTC",
  "STAB"
];

// function hosting behaviour and rendering
export default function MultipleSelect() {
  //app behaviour information
  const classes = useStyles();

  const theme = useTheme();

  //State
  const [selectedOption, setSelectedOption] = React.useState([]);


  //handles and displays single selects
  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  //handles and displays multiple selects
  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedOption(value);
  };
  //renders what you see on the page
  return (

    <div>
      <FormControl className={classes.formControl} id='formControl1'>
        <InputLabel id="mutiple-name-label" >MECHANISM</InputLabel>
        <Select
          labelId="mutiple-name-label"
          id="mutiple-name"
          multiple
          value={selectedOption}
          /*handlechange gets called on option selection*/
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
          className="selectControl"
        >
          {mechanisms.map(name => (
            <MenuItem
              key={name}
              value={name}
              id="MenuItem">
             {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
