import formData from "form-data"
import qs from "qs"
import axios from "axios"
import cheerio from "cheerio"
import jimp from "jimp"
import fetch from "node-fetch"
const themes = [
"https://photooxy.com/360-degree-living-room-panorama-effect-online-408.html",
"https://photooxy.com/360-degree-outdoor-photo-frame-created-online-405.html",
"https://photooxy.com/art-effects/3d-lines-photo-effect-302.html",
"https://photooxy.com/art-effects/a-picture-of-a-christmas-ball-245.html",
"https://photooxy.com/art-effects/add-math-background-to-a-photo-229.html",
"https://photooxy.com/art-effects/add-rainbow-to-your-photo-199.html",
"https://photooxy.com/art-effects/amazing-typography-portraits-photo-effect-250.html",
"https://photooxy.com/art-effects/apply-online-a-pencil-sketch-effect-on-a-picture-356.html",
"https://photooxy.com/art-effects/art-heart-clouds-291.html",
"https://photooxy.com/art-effects/bird-on-tree-double-exposure-effect-232.html",
"https://photooxy.com/art-effects/blender-galaxy-effect-351.html",
"https://photooxy.com/art-effects/blending-face-with-forest-233.html",
"https://photooxy.com/art-effects/broke-a-card-298.html",
"https://photooxy.com/art-effects/broken-mirrors-effect-299.html",
"https://photooxy.com/art-effects/burned-photo-on-table-193.html",
"https://photooxy.com/art-effects/burning-photos-with-lighter-244.html",
"https://photooxy.com/art-effects/combine-your-photos-with-the-city-246.html",
"https://photooxy.com/art-effects/create-3d-anaglyph-photo-effect-203.html",
"https://photooxy.com/art-effects/create-pencil-sketch-effect-with-your-photo-online-1.html",
"https://photooxy.com/art-effects/galaxy-photo-frames-352.html",
"https://photooxy.com/art-effects/gif-animated-rain-online-361.html",
"https://photooxy.com/art-effects/glitch-red-cyan-photo-effect-202.html",
"https://photooxy.com/art-effects/gray-watercolor-painting-effect-357.html",
"https://photooxy.com/art-effects/great-night-sky-effect-292.html",
"https://photooxy.com/art-effects/half-underwater-photo-effect-163.html",
"https://photooxy.com/art-effects/hand-holding-iphone-above-laptop-on-desk-209.html",
"https://photooxy.com/art-effects/hand-holding-iphone-above-your-laptop-210.html",
"https://photooxy.com/art-effects/iphone-x-mockup-online-204.html",
"https://photooxy.com/art-effects/magical-double-exposure-and-the-mountain-195.html",
"https://photooxy.com/art-effects/make-a-trendy-double-exposure-with-forest-194.html",
"https://photooxy.com/art-effects/make-the-photo-sink-in-the-sunset-236.html",
"https://photooxy.com/art-effects/make-your-own-music-player-205.html",
"https://photooxy.com/art-effects/matchstick-photo-effect-249.html",
"https://photooxy.com/art-effects/memory-photo-frame-393.html",
"https://photooxy.com/art-effects/night-beach-photo-effect-353.html",
"https://photooxy.com/art-effects/night-city-double-exposure-effect-235.html",
"https://photooxy.com/art-effects/online-double-exposure-forest-and-animals-239.html",
"https://photooxy.com/art-effects/online-merry-christmas-photo-frame-242.html",
"https://photooxy.com/art-effects/photo-burning-effect-on-hand-228.html",
"https://photooxy.com/art-effects/photo-effect-with-leaves-248.html",
"https://photooxy.com/art-effects/photo-effects-from-the-lines-251.html",
"https://photooxy.com/art-effects/photo-in-mouth-photo-241.html",
"https://photooxy.com/art-effects/photo-on-camera-lens-240.html",
"https://photooxy.com/art-effects/photo-to-painting-effect-230.html",
"https://photooxy.com/art-effects/place-photo-on-note-cover-225.html",
"https://photooxy.com/art-effects/print-photo-on-balloon-300.html",
"https://photooxy.com/art-effects/print-your-photo-to-the-galaxy-rubik-cube-214.html",
"https://photooxy.com/art-effects/put-your-photo-down-the-toilet-224.html",
"https://photooxy.com/art-effects/put-your-photo-into-rubik-cube-213.html",
"https://photooxy.com/art-effects/put-your-photos-into-the-frame-on-the-table-227.html",
"https://photooxy.com/art-effects/put-your-picture-on-the-iphone-wallpapers-216.html",
"https://photooxy.com/art-effects/ripped-or-torn-paper-340.html",
"https://photooxy.com/art-effects/set-your-photo-into-iphone-x-wallpaper-208.html",
"https://photooxy.com/art-effects/sketch-your-picture-on-paper-226.html",
"https://photooxy.com/art-effects/take-pictute-to-rubik-on-hands-215.html",
"https://photooxy.com/art-effects/tree-double-exposure-effect-234.html",
"https://photooxy.com/art-effects/turn-any-photo-into-a-jigsaw-puzzle-358.html",
"https://photooxy.com/art-effects/turn-part-of-your-photo-into-a-drawing-303.html",
"https://photooxy.com/art-effects/typographic-portrait-online-346.html",
"https://photooxy.com/art-effects/your-photo-burning-on-hand-192.html",
"https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
"https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
"https://photooxy.com/birthday-frames/beautiful-photo-frame-321.html",
"https://photooxy.com/birthday-frames/frame-hoa-violet-nature-382.html",
"https://photooxy.com/birthday-frames/happy-birthday-photo-frame-325.html",
"https://photooxy.com/birthday-frames/lovely-photo-frame-324.html",
"https://photooxy.com/birthday-frames/photo-frame-birthday-308.html",
"https://photooxy.com/birthday-frames/photo-frame-birthday-cute-309.html",
"https://photooxy.com/birthday-frames/photo-frame-happy-birthday-candy-334.html",
"https://photooxy.com/birthday-frames/very-cute-birthday-photo-frame-323.html",
"https://photooxy.com/burning-effect/holding-fire-animation-304.html",
"https://photooxy.com/burning-effect/photo-burns-on-hands-281.html",
"https://photooxy.com/canvas-painting-on-a-wooden-easel-with-a-gift-box-xmas-413.html",
"https://photooxy.com/christmas-background-and-decoration-with-black-wooden-photo-frames-414.html",
"https://photooxy.com/christmas-photo-frame-cute-winter-decorations-412.html",
"https://photooxy.com/christmas/beautiful-christmas-photo-frame-277.html",
"https://photooxy.com/christmas/beautiful-christmas-tree-frame-295.html",
"https://photooxy.com/christmas/beautiful-photo-frame-293.html",
"https://photooxy.com/christmas/christmas-card-257.html",
"https://photooxy.com/christmas/christmas-composition-2018-296.html",
"https://photooxy.com/christmas/christmas-frame-card-252.html",
"https://photooxy.com/christmas/christmas-greeting-card-image-285.html",
"https://photooxy.com/christmas/christmas-photo-frame-262.html",
"https://photooxy.com/christmas/circle-frame-in-flowers-260.html",
"https://photooxy.com/christmas/frame-in-christmas-room-289.html",
"https://photooxy.com/christmas/frame-on-pine-bush-258.html",
"https://photooxy.com/christmas/iphone-with-your-photos-in-christmas-space-297.html",
"https://photooxy.com/christmas/merry-christmas-and-happy-new-year-frame-254.html",
"https://photooxy.com/christmas/notepad-and-string-lights-270.html",
"https://photooxy.com/christmas/old-christmas-photo-284.html",
"https://photooxy.com/christmas/online-christmas-effect-269.html",
"https://photooxy.com/christmas/photo-frame-christmas-heart-276.html",
"https://photooxy.com/christmas/photo-frame-with-christmas-hat-294.html",
"https://photooxy.com/christmas/photo-in-noel-globe-253.html",
"https://photooxy.com/christmas/photo-in-snow-star-255.html",
"https://photooxy.com/christmas/photo-on-hand-266.html",
"https://photooxy.com/christmas/photo-under-pine-bush-256.html",
"https://photooxy.com/christmas/picture-you-with-santa-claus-268.html",
"https://photooxy.com/christmas/shimmering-frame-259.html",
"https://photooxy.com/christmas/shimmering-note-paper-267.html",
"https://photooxy.com/christmas/simple-frame-on-ground-261.html",
"https://photooxy.com/christmas/snowfall-effect-for-photos-275.html",
"https://photooxy.com/christmas/white-frame-on-snow-263.html",
"https://photooxy.com/create-a-360-degree-bedroom-panoramic-online-407.html",
"https://photooxy.com/create-a-bedroom-360-degree-photo-effect-406.html",
"https://photooxy.com/create-a-photo-frame-with-plastic-wrap-409.html",
"https://photooxy.com/create-halftone-photo-effects-online-410.html",
"https://photooxy.com/cross-fire/nice-cross-fire-cover-137.html",
"https://photooxy.com/cs-go/great-cs-go-banner-131.html",
"https://photooxy.com/dota/make-avatar-dota-2-online-139.html",
"https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
"https://photooxy.com/fps-game-effect/make-avatar-challenges-warface-155.html",
"https://photooxy.com/game-effects/cool-circle-guns-wallpapers-141.html",
"https://photooxy.com/game-effects/make-grand-theft-auto-v-official-cover-132.html",
"https://photooxy.com/glass-effect/broken-glass-effect-272.html",
"https://photooxy.com/glass-effect/broken-glass-photo-frame-273.html",
"https://photooxy.com/glass-effect/glass-effect-cracking-279.html",
"https://photooxy.com/glass-effect/hear-image-wrapped-glass-280.html",
"https://photooxy.com/league-of-kings/cool-league-of-kings-avatar-153.html",
"https://photooxy.com/league-of-legends/360-degree-challenge-frame-in-summoner-s-rift-159.html",
"https://photooxy.com/league-of-legends/avatar-custom-your-lol-rank-127.html",
"https://photooxy.com/league-of-legends/beatiful-lol-cover-with-glowing-text-effect-162.html",
"https://photooxy.com/league-of-legends/create-avatar-lol-with-your-rank-151.html",
"https://photooxy.com/league-of-legends/create-avatar-video-with-animation-lol-champions-180.html",
"https://photooxy.com/league-of-legends/create-cover-facebook-with-border-rank-150.html",
"https://photooxy.com/league-of-legends/create-lol-cover-with-a-pentakill-frame-154.html",
"https://photooxy.com/league-of-legends/make-avatar-lol-with-your-main-champions-138.html",
"https://photooxy.com/league-of-legends/make-flame-avatar-with-your-photo-231.html",
"https://photooxy.com/league-of-legends/make-great-cover-lol-133.html",
"https://photooxy.com/league-of-legends/make-lol-loading-screen-with-border-rank-206.html",
"https://photooxy.com/league-of-legends/make-solo-challenge-rank-lol-140.html",
"https://photooxy.com/league-of-legends/make-your-logo-pentakill-lol-128.html",
"https://photooxy.com/league-of-legends/shine-banner-skins-of-league-of-legends-145.html",
"https://photooxy.com/league-of-legends/wings-avatar-lol-effect-143.html",
"https://photooxy.com/logo-and-text-effects-c17-p2?name=logo-and-text-effects&category_id=17&module=default&controller=index&action=category&return_language=en&page=2&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1da",
"https://photooxy.com/logo-and-text-effects-c17-p3?name=logo-and-text-effects&category_id=17&module=default&controller=index&action=category&return_language=en&page=3&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1da",
"https://photooxy.com/logo-and-text-effects-c17-p4?name=logo-and-text-effects&category_id=17&module=default&controller=index&action=category&return_language=en&page=4&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1da",
"https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
"https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html",
"https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html",
"https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html",
"https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
"https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html",
"https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html",
"https://photooxy.com/logo-and-text-effects/create-a-3d-glowing-text-effect-220.html",
"https://photooxy.com/logo-and-text-effects/create-a-crisp-chromed-text-effect-196.html",
"https://photooxy.com/logo-and-text-effects/create-a-layered-leaves-typography-text-effect-354.html",
"https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
"https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
"https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
"https://photooxy.com/logo-and-text-effects/create-party-neon-text-effect-161.html",
"https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html",
"https://photooxy.com/logo-and-text-effects/create-wallpaper-with-modern-metal-text-179.html",
"https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html",
"https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html",
"https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
"https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
"https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
"https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
"https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
"https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
"https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
"https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html",
"https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
"https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
"https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
"https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html",
"https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
"https://photooxy.com/logo-and-text-effects/text-on-appy-birthday-cake-190.html",
"https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
"https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html",
"https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
"https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
"https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
"https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
"https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
"https://photooxy.com/love-romance-c22-p2?name=love-romance&category_id=22&module=default&controller=index&action=category&return_language=en&page=2&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1df",
"https://photooxy.com/love-romance/3d-heart-photo-frame-319.html",
"https://photooxy.com/love-romance/avatar-heart-valentine-335.html",
"https://photooxy.com/love-romance/card-under-the-roses-287.html",
"https://photooxy.com/love-romance/flower-card-290.html",
"https://photooxy.com/love-romance/frame-of-hearts-3d-valentine-320.html",
"https://photooxy.com/love-romance/heart-valentine-frame-286.html",
"https://photooxy.com/love-romance/i-love-you-valentine-313.html",
"https://photooxy.com/love-romance/international-women-day-339.html",
"https://photooxy.com/love-romance/photo-frame-for-valentine-day-330.html",
"https://photooxy.com/love-romance/photo-frame-happy-valentine-s-day-327.html",
"https://photooxy.com/love-romance/photo-frame-memories-385.html",
"https://photooxy.com/love-romance/photo-frame-on-rose-petals-317.html",
"https://photooxy.com/love-romance/photo-frame-valentine-day-326.html",
"https://photooxy.com/love-romance/photo-frame-valentine-day-gift-332.html",
"https://photooxy.com/love-romance/photo-frame-valentine-heart-316.html",
"https://photooxy.com/love-romance/photo-frame-valentine-roses-315.html",
"https://photooxy.com/love-romance/photo-in-valentine-gift-box-336.html",
"https://photooxy.com/love-romance/picture-avatar-valentine-heart-312.html",
"https://photooxy.com/love-romance/rose-photo-frame-306.html",
"https://photooxy.com/love-romance/sweets-frame-307.html",
"https://photooxy.com/love-romance/tear-paper-frame-314.html",
"https://photooxy.com/love-romance/valentine-card-and-purple-roses-288.html",
"https://photooxy.com/love-romance/valentine-s-day-photo-329.html",
"https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
"https://photooxy.com/manga-and-anime/make-one-piece-wanted-poster-online-129.html",
"https://photooxy.com/movies/make-pokemon-wallpaper-with-your-name-149.html",
"https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html",
"https://photooxy.com/other-design-c1-p2?name=other-design&category_id=1&module=default&controller=index&action=category&return_language=en&page=2&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1ca",
"https://photooxy.com/other-design/360-degrees-put-your-photos-into-the-gallery-room-158.html",
"https://photooxy.com/other-design/360-photos-frames-collection-265.html",
"https://photooxy.com/other-design/3d-block-style-photo-effect-176.html",
"https://photooxy.com/other-design/artistic-heart-effect-283.html",
"https://photooxy.com/other-design/catching-pokemon-simulator-148.html",
"https://photooxy.com/other-design/christmas-photo-frame-278.html",
"https://photooxy.com/other-design/combined-cover-and-avatar-301.html",
"https://photooxy.com/other-design/convert-image-to-360-degree-online-156.html",
"https://photooxy.com/other-design/create-3d-text-on-rainbow-online-189.html",
"https://photooxy.com/other-design/create-a-360-degree-photo-in-the-cube-157.html",
"https://photooxy.com/other-design/create-a-360-photo-slideshow-264.html",
"https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
"https://photooxy.com/other-design/create-your-own-mastery-7-avatar-181.html",
"https://photooxy.com/other-design/cross-gun-like-a-fps-player-130.html",
"https://photooxy.com/other-design/crystal-frame-274.html",
"https://photooxy.com/other-design/double-love-photo-frame-401.html",
"https://photooxy.com/other-design/double-photo-frame-400.html",
"https://photooxy.com/other-design/firework-video-effect-online-396.html",
"https://photooxy.com/other-design/flame-up-your-photo-on-a-paper-399.html",
"https://photooxy.com/other-design/glow-pentakill-cover-lol-136.html",
"https://photooxy.com/other-design/iphone-xs-mockup-online-398.html",
"https://photooxy.com/other-design/loving-memory-picture-frame-397.html",
"https://photooxy.com/other-design/make-360-degree-view-the-living-room-348.html",
"https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html",
"https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
"https://photooxy.com/other-design/make-jigsaw-puzzles-video-online-373.html",
"https://photooxy.com/other-design/make-poll-photo-like-or-love-243.html",
"https://photooxy.com/other-design/mix-into-galaxy-169.html",
"https://photooxy.com/other-design/photo-frame-happy-birthday-322.html",
"https://photooxy.com/other-design/photo-frame-valentine-love-328.html",
"https://photooxy.com/other-design/photo-frame-with-valentine-333.html",
"https://photooxy.com/other-design/photo-of-lead-art-337.html",
"https://photooxy.com/other-design/photo-on-notebook-310.html",
"https://photooxy.com/other-design/picture-frame-text-heart-318.html",
"https://photooxy.com/other-design/piece-of-heart-338.html",
"https://photooxy.com/other-design/put-photos-into-360-degree-room-305.html",
"https://photooxy.com/other-design/put-your-photo-to-glass-pokeball-144.html",
"https://photooxy.com/other-design/retro-avatar-league-of-legends-147.html",
"https://photooxy.com/other-design/vintage-text-style-219.html",
"https://photooxy.com/other-design/your-photo-with-rain-drops-effect-350.html",
"https://photooxy.com/overwatch/cover-overwatch-with-heros-134.html",
"https://photooxy.com/photo-frames-c24-p2?name=photo-frames&category_id=24&module=default&controller=index&action=category&return_language=en&page=2&line_per_page=10&category_mongo_id=61bb00963b4179b35d8fd1e1",
"https://photooxy.com/photo-frames/beautiful-pine-leaf-frame-384.html",
"https://photooxy.com/photo-frames/brilliant-photo-frame-344.html",
"https://photooxy.com/photo-frames/camera-photo-frame-359.html",
"https://photooxy.com/photo-frames/fern-leaf-picture-frame-380.html",
"https://photooxy.com/photo-frames/fifa-football-world-cup-frame-374.html",
"https://photooxy.com/photo-frames/paper-tearing-effect-311.html",
"https://photooxy.com/photo-frames/photo-frame-in-nature-379.html",
"https://photooxy.com/photo-frames/photo-frame-on-beach-345.html",
"https://photooxy.com/photo-frames/photo-of-summer-beach-383.html",
"https://photooxy.com/photo-frames/simple-nightmare-photo-frame-402.html",
"https://photooxy.com/photo-frames/simple-pip-frame-349.html",
"https://photooxy.com/photo-frames/summer-photo-frame-2018-381.html",
"https://photooxy.com/photo-frames/the-iphone-picture-frames-386.html",
"https://photooxy.com/photo-frames/tropical-summer-photo-frame-342.html",
"https://photooxy.com/warface/make-warface-cover-online-135.html"]

let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {

    await m.reply(wait)
        if (command == "photooxy") {
            let listSections = []
    Object.keys(themes).map((v, index) => {
        listSections.push([index + ' ' + cmenub + ' ' + themes[v], [
            ['Show...', usedPrefix + 'photooxyget ' + themes[v] + '|' + text, '\n']
        ]])
    })
    return conn.sendList(m.chat, htki + ' 📺 Oxy 🔎 ' + htka, `⚡ Silakan pilih Theme di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ List ☂️", listSections, m)
        }
        
        let ur = text.split`|`
        let one = ur[0]
        let two = ur[1]
        let three = ur[2]
        let out
        if ((two || three)) {
            out = ur[1] + '|' + ur[2]
        } else {
            out = ur[1]
        }
        let resu
        
        if (command == "photooxyget") {
        if (two.endsWith() == 'jpg') {
        resu = await oxyimage(one, two, Array.from(out.split('|')))
        } else {
        try {
            resu = await oxytext(one, Array.from(out.split('|')))
            } catch (e) {
            resu = await oxyradio(one, Array.from(out.split('|')))
            }
            await conn.sendFile(m.chat, resu, 'eror.jpg', '*[ Result ]*', m)
            }
            }
}
handler.command = /^(photooxy|photooxyget)$/i
export default handler

function oxytext(url, text) {
    return new Promise(async (resolve, reject) => {
        let cookies;
        let build_server;
        await axios.request({
            method: "GET",
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36"
            }
        }).then(async ({
            data,
            headers
        }) => {
            cookies = headers["set-cookie"];
            const $ = cheerio.load(data);
            const token = $("input[name='token']").attr("value");
            build_server = $("input[name='build_server']").attr("value");
            const build_server_id = $("input[name='build_server_id']").attr("value");
            const fd = new formData();
            if (typeof text == "string") text = [text];
            for (let teks of text) fd.append("text[]", teks);
            fd.append("submit", "GO");
            fd.append("token", token);
            fd.append("build_server", build_server);
            fd.append("build_server_id", build_server_id);
            await axios.request({
                method: "POST",
                url,
                data: fd,
                headers: {
                    ...fd.getHeaders(),
                    "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                    "Cookie": cookies
                }
            }).then(async ({
                data
            }) => {
                const $ = cheerio.load(data);
                const id = JSON.parse($("div.sr-only").text());
                await axios.request({
                    method: "POST",
                    url: "https://photooxy.com/effect/create-image",
                    data: qs.stringify(id),
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                        "Cookie": cookies
                    }
                }).then(({
                    data
                }) => {
                    resolve(build_server + data.image);
                }).catch(reject);
            }).catch(reject);
        }).catch(reject);
    });
}

function oxyradio(url, text) {
    return new Promise(async (resolve, reject) => {
        let cookies;
        let build_server;
        await axios.request({
            method: "GET",
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36"
            }
        }).then(async ({
            data,
            headers
        }) => {

            const $ = cheerio.load(data);
            let inputDataRadio = new Array();
            let inputDataAll = new Array();
            $("form.ajax-submit").find("input[name='radio0[radio]']").get().map(mapping => {
                inputDataRadio.push($(mapping).attr("value"));
            });
            $("form.ajax-submit").find("input[type='hidden']").get().map(mapping => {
                inputDataAll.push({
                    name: $(mapping).attr("name"),
                    value: $(mapping).attr("value")
                });
            });
            cookies = headers["set-cookie"];
            build_server = inputDataAll[1].value;
            const fd = new formData();
            const randomRadio = inputDataRadio[Math.floor(Math.random() * inputDataRadio.length)];
            fd.append("radio0[radio]", randomRadio);
            if (typeof text == "string") text = [text];
            for (let teks of text) fd.append("text[]", teks);
            fd.append("submit", "GO");
            fd.append(inputDataAll[0].name, inputDataAll[0].value);
            fd.append(inputDataAll[1].name, inputDataAll[1].value);
            fd.append(inputDataAll[2].name, inputDataAll[2].value);
            await axios.request({
                method: "POST",
                url,
                data: fd,
                headers: {
                    ...fd.getHeaders(),
                    "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                    "Cookie": cookies
                }
            }).then(async ({
                data
            }) => {
                const $ = cheerio.load(data);
                const id = $("div.sr-only").text();
                const parse = JSON.parse(id);
                const stringify = qs.stringify(parse);
                await axios.request({
                    method: "POST",
                    url: "https://photooxy.com/effect/create-image",
                    data: stringify,
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                        "Cookie": cookies
                    }
                }).then(({
                    data
                }) => {

                    resolve(build_server + data.image);
                }).catch(reject);
            }).catch(reject);
        }).catch(reject);
    });
}

function oxyimage(url, link, agent) {
    return new Promise(async (resolve, reject) => {
        let getDataOne = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36"
            }
        });

        const _ = cheerio.load(getDataOne.data);
        let cookies = getDataOne.headers["set-cookie"];
        let token = _("input[name='token']").attr("value");
        let build_server = "https://e1.yotools.net";
        let build_server_id = _("input[name='build_server_id']").attr("value");
        let buffer;
        let width;
        let height;
        await jimp.read(link).then(image => {
            width = image.bitmap.width;
            height = image.bitmap.height;
            image.getBuffer(image._originalMime, function(error, response) {
                buffer = response;
            });
        }).catch(reject);
        if (!Buffer.isBuffer(buffer)) return reject("Buffer is not a buffer");
        const formUpload = new formData();
        formUpload.append("myfile", Buffer.from(buffer), {
            filename: "blob",
            contentType: "image/png",
            ...agent && {
                agent
            }
        });
        await axios.request({
            method: "POST",
            url: "https://e1.yotools.net/upload",
            data: formUpload,
            headers: {
                ...formUpload.getHeaders()
            }
        }).then(async ({
            data
        }) => {

            const formPostData = new formData();
            const imageUpload = JSON.stringify({
                "image": data.uploaded_file,
                "image_thumb": data.thumb_file,
                "icon_file": data.icon_file,
                "x": 0,
                "y": 0,
                "width": width,
                "height": height,
                "rotate": 0,
                "scaleX": 1,
                "scaleY": 1,
                "thumb_width": width
            });
            formPostData.append("file_image_input", "");
            formPostData.append("image[]", imageUpload);
            formPostData.append("submit", "GO");
            formPostData.append("token", token);
            formPostData.append("build_server", build_server);
            formPostData.append("build_server_id", build_server_id);
            await axios.request({
                method: "POST",
                url,
                data: formPostData,
                headers: {
                    ...formPostData.getHeaders(),
                    "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                    "Cookie": cookies
                }
            }).then(async ({
                data
            }) => {
                const $ = cheerio.load(data);
                const tokenID = $("div.sr-only").text();
                const parse = JSON.parse(tokenID);
                const stringify = qs.stringify(parse);
                await axios.request({
                    method: "POST",
                    url: "https://photooxy.com/effect/create-image",
                    data: stringify,
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
                        "Cookie": cookies
                    }
                }).then(({
                    data
                }) => {

                    resolve(build_server + data.image);
                }).catch(reject);
            }).catch(reject);
        }).catch(reject);
    });
}