<script>
    import { Moon, Sun } from "tabler-icons-svelte";
    export let toggleTheme;
</script>

<label class="switch">
    <input id="theme-checkbox-toggler" type="checkbox" checked>
    <span class="slider round" on:click={toggleTheme}>
        <span class="sun">
            <Sun size={"16px"} color={"#ffef60"}/>
        </span>
        <span class="noon">
            <Moon size={"16px"} color={"#ffef60"}/>
        </span>    
    </span>
</label>

<style lang="scss">
        .switch {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 23px;
        input { 
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;

            &:before {
                position: absolute;
                content: "";
                height: 24px;
                width: 24px;
                background-color: #fff;
                box-shadow: 0px 0px 3px 2px rgba(245,158,11,0.75);
                -webkit-box-shadow: 0px 0px 3px 2px rgba(245,158,11,0.75);
                -moz-box-shadow: 0px 0px 3px 2px rgba(245,158,11,0.75);
                -webkit-transition: .4s;
                transition: .4s;
                z-index: 2;
                border-radius: 34px;
            }
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(30px);
            -ms-transform: translateX(30px);
            transform: translateX(30px);
        }

        .sun, .noon {
            bottom: 3px;
        }

        .sun {
            z-index: 1;
            position: absolute;
            left: 4px;
        }

        .noon {
            z-index: 1;
            position: absolute;
            right: 4px;
        }
    }
</style>