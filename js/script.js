new Vue({
    el: '#apps',
    data: {
        armor: 100,
        textCpu : '',
        caracterPlayer: 'assets/player/stand.gif',
        detik: 1,
        disabled: true,
        dialogCpu : '...',
        dialogPlay : '...',
        actionAkhir: '',
        displayNone : 'none',
        cheat_aktiv : '0',
        attack_cheat: 15,
        attack_immunt: 15,
        attack_cheat_val : '0',
        cpuImg : '?',
        caracterCpu: 'assets/cpu/stand.gif',
        armorCpu: 100
    },
    methods: {  
        acakCpu : function(){
        v = this;
        time = new Date().getTime()
        stndCpu = 'assets/cpu/stand.gif'
        standPlayer = 'assets/player/stand.gif'
        if(v.caracterCpu !== stndCpu || v.caracterPlayer !== standPlayer ||  v.cpuImg !== '?' || v.disabled !== true ||  dialogCpu !== '...' || dialogPlay !== '...'){
            v.caracterCpu = stndCpu
            v.caracterPlayer= standPlayer
            v.cpuImg = '?'
            v.disabled = true
            v.dialogCpu= '...'
            v.dialogPlay = '...'
        }
    },
    comAttac : function(){
        var v = this;
        v.caracterCpu = 'assets/cpu/attack.gif'
        v.caracterPlayer= 'assets/player/hit.gif'
        v.armor = v.armor - v.attack_immunt
        v.disabled = false
        v.dialogCpu= 'Kuseraaaaang kaauuuu ! ! !'
        v.dialogPlay = 'waaaaahhhhh ! Hayukkkkk'
    },
    playerAttc: function(){
        var v = this;
        v.caracterCpu = 'assets/cpu/hit.gif'
        v.caracterPlayer= 'assets/player/attack2.gif'
        v.armorCpu = v.armorCpu - v.attack_cheat
        v.disabled = false
        v.dialogCpu= 'AAANNJJIIMMMMM!!!'
        v.dialogPlay = 'Raaaassaaaakkaannn Iniiiiiii!!!'
    },
    lawan: function(pilih){
            var pilih = pilih;
                cpu = Math.floor(Math.random() * 100);
                v = this;
                
            if( cpu >= 0 && cpu <= 40 ){
                v.cpuImg = 'Gajah'
                v.textCpu = 'gajah'
            }else if(cpu >= 41 && cpu <= 70){
                v.cpuImg = 'Semut'
                v.textCpu = 'semut'
            }else{
                v.cpuImg = 'Orang'
                v.textCpu = 'orang'
            }

            if(pilih === v.textCpu){
                this.disabled = false
                this.dialogCpu= 'Jangaaannn Saammmaaa'
                this.dialogPlay = 'Luuu yaangggg saammaaa'
            }else if(pilih == 'gajah'){
                if(v.textCpu == 'semut' ){
                    v.comAttac()
                }else{
                    v.playerAttc()
                }
            }else if(pilih == 'semut'){
                if(v.textCpu == 'orang'){
                    v.comAttac()
                }else{
                    v.playerAttc()
                }
            }else if(pilih == 'orang'){
                if(v.textCpu == 'gajah'){
                    v.comAttac()
                }else{
                    v.playerAttc()
                }
            }
            setTimeout(v.acakCpu, 2000)
            if(v.armor === 0 || v.armorCpu === 0 || v.armor < 0 || v.armorCpu < 0){
                v.displayNone = 'block'
                if(v.armor < 0){
                    v.armor = 0
                }else if(v.armorCpu < 0){
                    v.armorCpu = 0
                }
                if(v.armor === 0 ){
                    v.actionAkhir = 'You Lose'
                }else if(v.armorCpu === 0){
                    v.actionAkhir = 'You Win'
                }

            }

        },
        aktifkan : function(event){
            
           var cheat = event.target.value
               v = this
           if(cheat === 'armorup'){
            if(v.armor == 100){
                v.armor 
            }else{
                if(v.armor >= 100){
                    v.armor = 100
                }else{
                    v.armor = v.armor + 10
                }
                
            }
           }
           if(cheat === 'quickattack'){
              if(v.attack_cheat_val === '0'){
                v.attack_cheat =  25
              }else{
                v.attack_cheat
              }
              v.attack_cheat_val = '1'
           }
           if(cheat === 'quickattackoff'){
            v.attack_cheat_val = '0'
            v.attack_cheat =  20
           }
           if(cheat === 'vaksin'){
            v.attack_immunt = 5
           }else if(cheat === 'vaksinoff'){
            v.attack_immunt = 15
           }
        },
        aktifkan_cheat : function(no){
           return console.log(this.cheat_aktiv = no) 
        },
        close_cheat : function(){
            return console.log(this.cheat_aktiv = '0')
        }
    },
    computed: {
        isDisabled : function(){
            return !this.disabled
        },
        reload : function(){
            location.reload()
        }
    }


})
