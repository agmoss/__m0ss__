import React from "react";
import { useTheme } from "@material-ui/core";
import { BlockPicker, ColorResult } from "react-color";

interface IColorPicker {
    setColor: Function;
}

const ColorPicker = ({ setColor }: IColorPicker) => {
    const theme = useTheme();

    function onChange(color: ColorResult) {
        setColor(color.hex);
    }

    const colorSelections = [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#607d8b",
    ];

    return (
        <BlockPicker
            width="100%"
            triangle="hide"
            colors={colorSelections}
            color={theme.palette.primary.main}
            onChange={onChange}
        />
    );
};

export default ColorPicker;
