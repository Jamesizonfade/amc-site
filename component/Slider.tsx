import { useRouter } from "next/router";
import slider from "../data/slider.json";

export const Slider = () => {
  const router = useRouter();
  return (
    <>
      <div className="rev_slider_wrapper bg-arrows">
        <div id="rev_slider" className="rev_slider fullscreenbanner">
          <ul>
            {slider.map((rec, idx) => (
              <li
                key={idx}
                data-delay="5000"
                data-transition="slotzoom-horizontal"
                data-slotamount="7"
                data-masterspeed="1000"
                data-fsmasterspeed="1000"
              >
                <img
                  src={rec?.img_path}
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                />
                <div
                  className="slide-title tp-caption tp-resizeme white-color text-center"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-90','-90', '-150', '-350']"
                  data-fontsize="['70','70', '70', '125']"
                  data-fontweight="600"
                  data-lineheight="['85','85', '80', '135']"
                  data-width="['800','800','650']"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.05"
                >
                  {rec?.title}
                  <a id="btn-slider" href="/own-a-property">
                    Own A Property
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
