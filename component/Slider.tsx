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
                </div>

                <a
                  href="/own-a-property"
                  className="tp-caption rev-btn tp-resizeme slider-btn button-primary btn-slider"
                  id="slide-1081-layer-13"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['100','100','100','30']"
                  data-fontsize="['15','15','15','15']"
                  data-fontweight="600"
                  data-lineheight="['50','50','50','50']"
                  data-width="['200','200','200','200']"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-start="1500"
                  data-type="button"
                  data-responsive_offset="on"
                  data-splitin="none"
                  data-splitout="none"
                  data-frames='[{"delay":900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Own A Property
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
