export default  [
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/5683/5683743.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/9762/9762173.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/10539/10539321.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: "Generate a GitHub README",
        desc: 'An AI tool that generate GitHub readme file',
        icon: 'https://cdn-icons-png.flaticon.com/128/3291/3291695.png',
        category: 'github',
       
        slug: 'github-readme-generator',
        aiPrompt: 'Generate github customized readme file based on title, description and give output in rich text editor format',
        form: [
            {
                label: 'Project title',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: "Brief Description",
                field: "textarea",
                name: "keyowords",
                required: true
            }
        ]

    },
    {
        name: "Tax pay process",
        desc: 'An AI tool that generate Tax pay process',
        icon: 'https://cdn-icons-png.flaticon.com/128/1026/1026130.png',
        category: 'Tax',
       
        slug: 'tax-pay-generator',
        aiPrompt: 'Generate tax pay process based on tax name, country and give output in rich text editor format with large font',
        form: [
            {
                label: 'Tax name',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: "Country",
                field: "input",
                name: "keyowords",
                required: true
            }
        ]

    },
    {
        name: 'Twitter/X Tweets Idea',
        desc: 'An AI tool that generate New and trending twitter idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/2580/2580291.png',
        category: 'twitter',
       
        slug: 'twitter-post-idea-generator',
        aiPrompt: 'Generate 5-10 twitter tweets idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your tweets idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
        ]
    },

    {
        name: 'Twitter/X Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/25/25660.png',
        category: 'blog',
       
        slug: 'twitter-post-generator',
        aiPrompt: 'Generate 3 Twitter post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Twitter/X Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2671/2671909.png',
        category: 'blog',
       
        slug: 'twitter-hash-tag-generator',
        aiPrompt: 'Generate 15 Twitter hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your twitter hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4180/4180955.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/10139/10139514.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/8733/8733545.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 20 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/11817/11817766.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 10 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384028.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/5764/5764721.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 15 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://t4.ftcdn.net/jpg/04/61/45/67/240_F_461456762_EOvb34U7SDmnjsuW2jer7SlxztwdYwHa.jpg',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4400/4400433.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3307/3307993.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1400/1400829.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7754/7754205.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/3032/3032220.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596743.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:"https://cdn-icons-png.flaticon.com/128/4213/4213148.png",
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/9606/9606416.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },



]