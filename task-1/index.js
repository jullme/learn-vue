var app = new Vue({
    el: '#app',
    data: {
        users: [
            {
                name: 'vladimir',
                surname: 'fomenko',
                middleName:'ivanovich',
                photo: 'https://fedspendingtransparency.github.io/assets/img/user_personas/repurposer_mug.jpg'
            },
            {
                name: 'alex',
                surname: 'simon',
                middleName:'borisovich'
            },
            {
                name: 'mariia',
                surname: 'kucheruk',
                middleName:'petrovna',
                photo: 'https://media.nngroup.com/media/people/photos/Kathryn_1.jpg.400x400_q95_autocrop_crop_upscale.jpg'
            },
            {
                name: 'kristina',
                surname: 'johansson',
                middleName:'sergeievna',
                photo: 'https://www.hoganlovells.com/~/media/hogan-lovells/images/new-headshots/washington/washington-july-6/ali_kathryn_h16698.jpg'
            },
            {
                name: 'max',
                surname: 'ivanov',
                middleName:'nikolaievich',
                photo: 'https://blog.applovin.com/wp-content/uploads/2017/03/alex_merutka.jpg'
            }
        ],
        defaultPhoto: 'https://www.zipformplus.com/css/images/UserProfileGray.fw.jpg',
        isOpen: true,
        tooltip: 'Show or close the list of users'
    },
    computed: {
        usersLength() {
            return this.users.length
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        capitalizeFullName(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        getFullName(user) {
            return `${this.capitalizeFullName(user.name)} ${this.capitalizeFullName(user.surname)} ${this.capitalizeFullName(user.middleName)}`
        }
    }
});