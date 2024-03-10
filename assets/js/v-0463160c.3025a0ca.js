"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30041],{849196:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-0463160c","path":"/devices/E2001_E2002.html","title":"IKEA E2001/E2002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2001/E2002 control via MQTT","description":"Integrate your IKEA E2001/E2002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Button -> action mapping","slug":"button-action-mapping","link":"#button-action-mapping","children":[]},{"level":3,"title":"Latest firmware","slug":"latest-firmware","link":"#latest-firmware","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710095579000},"filePathRelative":"devices/E2001_E2002.md"}')},172522:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var a=i(166252);const o=(0,a._)("h1",{id:"ikea-e2001-e2002",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ikea-e2001-e2002","aria-hidden":"true"},"#"),(0,a.Uk)(" IKEA E2001/E2002")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"E2001/E2002")],-1),r=(0,a._)("td",null,"Vendor",-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"STYRBAR remote control")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, action, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2001-E2002.png",alt:"IKEA E2001/E2002"})])],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row within 5 seconds. If this doesn&#39;t work, try pressing the pair button up to 10 times in very quick succession. The red light on the side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="button-action-mapping" tabindex="-1"><a class="header-anchor" href="#button-action-mapping" aria-hidden="true">#</a> Button -&gt; <code>action</code> mapping</h3><table><thead><tr><th>Icon</th><th>Action</th><th>Exposed Action</th></tr></thead><tbody><tr><td>Light large ( top )</td><td>push</td><td>on</td></tr><tr><td>Light large ( top )</td><td>hold</td><td>brightness_move_up</td></tr><tr><td>Light large ( top )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Light small ( bottom )</td><td>push</td><td>off</td></tr><tr><td>Light small ( bottom )</td><td>hold</td><td>brightness_move_down</td></tr><tr><td>Light small ( bottom )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow left</td><td>push</td><td>arrow_left_click</td></tr><tr><td>Arrow left</td><td>hold</td><td>arrow_left_hold</td></tr><tr><td>Arrow left</td><td>release</td><td>arrow_left_release</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow right</td><td>push</td><td>arrow_right_click</td></tr><tr><td>Arrow right</td><td>hold</td><td>arrow_right_hold</td></tr><tr><td>Arrow right</td><td>release</td><td>arrow_right_release</td></tr></tbody></table><p>For the arrow buttons it seems that the hold/move action takes a bit longer to be send.</p><h3 id="latest-firmware" tabindex="-1"><a class="header-anchor" href="#latest-firmware" aria-hidden="true">#</a> Latest firmware</h3>',7),u={href:"https://github.com/Koenkk/zigbee2mqtt/issues/18515",target:"_blank",rel:"noopener noreferrer"},p=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),m=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),g=(0,a.uE)('<ul><li><p><code>identify_timeout</code>: Sets duration of identification procedure in seconds (i.e., how long device would flash). Value ranges from 1 to 30 seconds (default 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>arrow_left_click</code>, <code>arrow_right_click</code>, <code>arrow_left_hold</code>, <code>arrow_right_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),b={},f=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink"),b=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[d,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,a.w5)((()=>[(0,a.Uk)("IKEA")])),_:1})])]),l,s,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a._)("p",null,[(0,a.Uk)('IKEA has changed their firmware versioning after the original 1.0.0.24 leading to a notification "Firmware on ... is newer than latest firmware online", despite the online firmware being actually newer. Follow the instructions in '),(0,a._)("a",u,[(0,a.Uk)("this issue"),(0,a.Wm)(b)]),(0,a.Uk)(" to force update the firmware. Note that the remote loses the capability to bind to a group in the latest firmware.")]),(0,a.kq)(" Notes END: Do not edit below this line "),p,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),m,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);