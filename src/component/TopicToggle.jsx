/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import cx from "classnames";

const TopicToggle = ({ rounded = false }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });
  const styles = {
    switch: css`
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & input:checked + .slider:before {
        transform: translate(26px);
      }
      & input:checked + .slider {
        background-color: #87bcbf;
      }
    `,
    slider: css`
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #E0E5E5;

      transition: 0.4s;
      &.slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #fff;
        transition: 0.4s;
      }
      &.slider.rounded {
        border-radius: 34px;
      }
      &.slider.rounded:before {
        border-radius: 50%;
      }
    `,
  };
  return (
    <label css={styles.switch}>
      <input type="checkbox" />
      <span css={styles.slider} className={sliderCX} />
    </label>
  );
};

export default TopicToggle;
