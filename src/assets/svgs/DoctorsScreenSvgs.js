
import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const ArchimedLogo = () => {
    return <Svg
        width={32}
        height={21}
        viewBox="0 0 32 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M10.872 13.815a3.941 3.941 0 01-.526.045c-1.834 0-3.322-1.51-3.322-3.371 0-1.862 1.488-3.372 3.322-3.372.179 0 .358.012.537.046a10.481 10.481 0 014.642-5.755A10.216 10.216 0 0010.346 0C4.631 0 0 4.7 0 10.5S4.63 21 10.346 21c1.88 0 3.646-.51 5.168-1.408a10.491 10.491 0 01-4.642-5.777z"
            fill="#FF414C"
        />
        <Path
            d="M19.865 14.61c-1.868-.386-3.277-2.066-3.277-4.075 0-2.02 1.42-3.7 3.3-4.075a10.452 10.452 0 00-4.374-5.04 10.53 10.53 0 00-4.641 5.755c1.577.26 2.785 1.646 2.785 3.326 0 1.68-1.208 3.076-2.797 3.326a10.53 10.53 0 004.642 5.777 10.536 10.536 0 004.362-4.994z"
            fill="#262626"
        />
        <Path
            d="M20.681 13.315a4.01 4.01 0 01-.369-.023c-1.353-.181-2.405-1.362-2.405-2.792 0-1.43 1.052-2.61 2.405-2.792.123-.012.246-.023.37-.023 1.532 0 2.773 1.26 2.773 2.815a2.787 2.787 0 01-2.774 2.815zm0-13.315c-1.879 0-3.646.51-5.167 1.408a10.502 10.502 0 014.373 5.04c-1.88.374-3.3 2.054-3.3 4.075 0 2.009 1.41 3.689 3.278 4.075a10.493 10.493 0 01-4.351 4.983 10.145 10.145 0 005.167 1.408c5.716 0 10.346-4.7 10.346-10.5C31.027 4.699 26.397 0 20.681 0z"
            fill="#9DC458"
        />
    </Svg>;
};

export const HorizontalLine = () => {
    return <Svg
        width={52}
        height={2}
        viewBox="0 0 52 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path d="M0 0h52a2 2 0 01-2 2H2a2 2 0 01-2-2z" fill="#BDBDBD" />
    </Svg>;
};

export const EditIcon = () => {
    return <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 00-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.58l5.727-5.726a1.854 1.854 0 00-2.621-2.621v0z"
            stroke="#FF414C"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M19 15v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h3"
            stroke="#FF414C"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>;
};

export const PushPin = () => {
    return <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M4.667 2h6.666m-.073 5.633A1.333 1.333 0 0112 8.827V10H4V8.827a1.333 1.333 0 01.74-1.194l.593-.3L6 2h4l.667 5.333.593.3zM8 10v4-4z"
            stroke="#FF4E4E"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>;
};

export const ArrowDownWhite = () => {
    return <Svg
        width={28}
        height={22}
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.138 7.994a1 1 0 011.368-.357l8.046 4.719 8.981-4.74a1 1 0 11.934 1.768l-9.474 5a1 1 0 01-.972-.021l-8.527-5a1 1 0 01-.356-1.369z"
            fill="#fff"
        />
    </Svg>;
};

export const GreenStar = () => {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M31.038 12.068l-8.678-1.26-3.88-7.866a1.087 1.087 0 00-.495-.495 1.098 1.098 0 00-1.466.495l-3.88 7.865-8.678 1.261a1.092 1.092 0 00-.605 1.867l6.279 6.121L8.152 28.7a1.092 1.092 0 001.586 1.152l7.762-4.081 7.762 4.081a1.092 1.092 0 001.586-1.152l-1.483-8.644 6.278-6.121c.171-.168.284-.387.318-.626a1.09 1.09 0 00-.923-1.24z"
                fill="#9DC458"
            />
        </Svg>
    );
};

export const GreyStar = () => {
    return (
        <Svg
            width={35}
            height={36}
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M31.038 12.28l-8.678-1.262-3.88-7.865a1.087 1.087 0 00-.495-.495 1.098 1.098 0 00-1.466.495l-3.88 7.865-8.678 1.261a1.092 1.092 0 00-.605 1.867l6.279 6.121-1.483 8.644a1.092 1.092 0 001.586 1.152l7.762-4.081 7.762 4.081a1.092 1.092 0 001.586-1.152l-1.483-8.644 6.278-6.121c.171-.168.284-.387.318-.626a1.09 1.09 0 00-.923-1.24z"
                fill="#E0E0E0"
            />
        </Svg>
    );
};


export const ArrowDown = () => {
    return (
        <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M13 10l5.684 6L25 10"
                stroke="#FF414C"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const FilledStar = () => {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M15.962 6.207l-4.463-.65-1.995-4.044a.565.565 0 00-1.009 0L6.5 5.558l-4.463.649a.561.561 0 00-.311.96l3.229 3.148-.763 4.445a.562.562 0 00.816.592L9 13.255l3.992 2.098a.562.562 0 00.816-.592l-.764-4.445 3.23-3.149a.562.562 0 00-.312-.96z"
                fill="#fff"
            />
        </Svg>
    );
};

export const PlaceIcon = () => {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12 2.5c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                fill="#FF414C"
            />
        </Svg>
    );
};

export const DoneIcon = () => {
    return (
        <Svg
            width={28}
            height={29}
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9 18.482L21.537 7.5 23 9.009 10.9 21.5 5 15.41l1.462-1.508 4.437 4.58z"
                fill="#FF414C"
            />
        </Svg>
    );
};

export const CurrencyRub = () => {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M10.406 10.688a4.22 4.22 0 000-8.438H6.187a.563.563 0 00-.562.563v6.75H3.937a.563.563 0 100 1.124h1.688v1.126H3.937a.563.563 0 000 1.124h1.688v2.25a.562.562 0 101.125 0v-2.25h3.375a.562.562 0 100-1.124H6.75v-1.126h3.656zM6.75 3.375h3.656a3.094 3.094 0 110 6.188H6.75V3.375z"
                fill="#7B9E45"
            />
        </Svg>
    );
};

export const WhiteBackIcon = () => {
    return <Svg
        width={22}
        height={28}
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.684 4.27a1 1 0 01.045 1.414l-7.39 7.877 7.425 8.794a1 1 0 11-1.528 1.29l-8-9.473a1 1 0 01.035-1.33l8-8.526a1 1 0 011.413-.045z"
            fill="#F7F7F7"
        />
    </Svg>;
};


