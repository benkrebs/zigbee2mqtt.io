"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85978],{590348:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-6ec73914","path":"/devices/PTM_215Z.html","title":"EnOcean PTM 215Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EnOcean PTM 215Z control via MQTT","description":"Integrate your EnOcean PTM 215Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710095579000},"filePathRelative":"devices/PTM_215Z.md"}')},837329:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(166252);const i=(0,o._)("h1",{id:"enocean-ptm-215z",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#enocean-ptm-215z","aria-hidden":"true"},"#"),(0,o.Uk)(" EnOcean PTM 215Z")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"PTM 215Z")],-1),r=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Pushbutton transmitter module")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"action, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PTM-215Z.png",alt:"EnOcean PTM 215Z"})])],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Niko 91004, NodOn CWS-4-1-01_HUE, Vimar 03906, Sunricher SR-ZGP2801K4-FOH-E, LED-Trading 9125, Feller 4120.2.S.FMI.61")],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>This device has 4 buttons:</p><table><thead><tr><th>Number</th><th>Button</th><th>Position</th><th>Channel</th></tr></thead><tbody><tr><td>1</td><td>A0</td><td>Top left</td><td>15</td></tr><tr><td>2</td><td>A1</td><td>Bottom left</td><td>20</td></tr><tr><td>3</td><td>B0</td><td>Top right</td><td>11</td></tr><tr><td>4</td><td>B1</td><td>Bottom right</td><td>25</td></tr></tbody></table><p>In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.</p><p>To pair it, hold the corresponding button for that channel for 7 seconds or more.</p><p>Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don&#39;t press any other buttons between this and the pairing.</p><p>In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.</p><p>Alternatively, you should be able to reset the switch with the following pattern:</p><ol><li>Press top left (A0)</li><li>Press and hold top right (B0) for about 10 seconds</li><li>press top right (B0) and bottom left (A1) at the same time</li><li>press top left (A0) Note: Please make sure the module is positioned the right way up.</li></ol>',13),p=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>release_1</code>, <code>press_2</code>, <code>release_2</code>, <code>press_3</code>, <code>release_3</code>, <code>press_4</code>, <code>release_4</code>, <code>press_1_and_3</code>, <code>release_1_and_3</code>, <code>press_2_and_4</code>, <code>release_2_and_4</code>, <code>press_energy_bar</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},b=(0,n(983744).Z)(g,[["render",function(e,t){const n=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),i,(0,o._)("table",null,[d,(0,o._)("tbody",null,[a,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(n,{to:"/supported-devices/#v=EnOcean"},{default:(0,o.w5)((()=>[(0,o.Uk)("EnOcean")])),_:1})])]),l,s,c,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);