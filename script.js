// College Admissions Game
class CollegeAdmissionsGame {
    constructor() {
        this.students = [];
        this.currentIndex = 0;
        this.score = 0;
        this.totalDecisions = 0;
        this.correctDecisions = 0;
        this.userDecisions = [];
        this.eventListenersSetup = false;
        this.isMakingDecision = false;
        
        this.initializeGame();
    }

    initializeGame() {
        this.loadStudentData();
        this.setupEventListeners();
        this.showHomeScreen();
    }

    loadStudentData() {
        // High-quality student data with synthetic names (removed low completeness records)
        this.students = [
            // New high-quality records from user
            {
                id: "reddit_1jljrwh_p0",
                name: "Carlos Martinez",
                school: "Georgia Institute of Technology",
                gpa: { unweighted: 3.98, weighted: 4.4, rank: "42/375", ap_ib_dual: null },
                sat_act: { sat: 1460, act: null },
                race: "Latino",
                gender: "Male",
                extracurriculars: ["2 leadership roles in engineering", "200 hours of volunteer work"],
                awards: [],
                admissionResults: {
                    acceptances: ["Georgia Tech (EA)", "UGA (EA)", "University of Miami (EA + Presidential Scholarship)", "University of South Carolina (EA + in-state tuition reduction + $$)", "USCB"],
                    waitlists: ["UCLA"],
                    deferrals: ["University of Florida (Deferred to RD)"],
                    rejections: ["Southern California", "UCSD", "Berkeley", "UNC"]
                },
                intendedMajor: "Industrial and Systems Engineering",
                completenessScore: 85
            },
            {
                id: "reddit_1klkxwt_p0",
                name: "Jennifer Liu",
                school: "Carnegie Mellon University",
                gpa: { unweighted: 99.0, weighted: null, rank: "1/50", ap_ib_dual: "3 elective courses (max)" },
                sat_act: { sat: 1480, act: null },
                race: "Asian",
                gender: "Female",
                extracurriculars: ["Stock trading", "Coded a stock finder using AI", "Harvard CS50", "Passion project: taught basic coding", "Leadership in volunteering (+100 people)", "Theater", "Student government", "Volleyball", "High school level research with real implementation"],
                awards: ["Full ride scholarship for a slightly competitive university (junior year)", "Scholarship from national university (senior year)", "Scholarships from school", "Grand prize for a regional speaking contest", "Smaller prize for another regional speaking contest"],
                admissionResults: {
                    acceptances: ["University of Vermont (Presidential Scholarship)", "University of Washington (Purple & Gold Scholarship)", "Carnegie Mellon University (SCS)"],
                    waitlists: ["Washington University in St. Louis (WashU)", "Lafayette College"],
                    deferrals: [],
                    rejections: ["UPenn", "Columbia", "NYU", "USC", "UMich", "Lehigh", "Rice"]
                },
                intendedMajor: "Computer Science",
                completenessScore: 95
            },
            {
                id: "reddit_1lxdpvy_p0",
                name: "Alex Chen",
                school: "University of Southern California",
                gpa: { unweighted: 3.98, weighted: 4.4, rank: "top 6%", ap_ib_dual: null },
                sat_act: { sat: 1510, act: null },
                race: "Asian",
                gender: null,
                extracurriculars: ["Sport"],
                awards: [],
                admissionResults: {
                    acceptances: ["USC", "UCSD", "UCSB", "UCD"],
                    waitlists: [],
                    deferrals: [],
                    rejections: []
                },
                intendedMajor: "Economics",
                completenessScore: 65
            },
            // Keep only high-quality existing records
            {
                id: "P27",
                name: "Jordan Chen",
                school: "Cornell University",
                gpa: { unweighted: 99.02, weighted: 108.04, rank: "1/360", ap_ib_dual: "5 APs (4x5, 1x4)" },
                sat_act: { sat: null, act: 35 },
                race: "Asian",
                gender: "Male",
                extracurriculars: [],
                awards: [],
                admissionResults: {
                    acceptances: ["Cornell (ED)"],
                    waitlists: [],
                    deferrals: [],
                    rejections: []
                },
                completenessScore: 70
            },
        ];

        // Add some additional generated profiles for variety
        this.addGeneratedProfiles();
        
        // Add more high-quality profiles for better game experience
        this.addMoreProfiles();
    }

    addGeneratedProfiles() {
        const additionalProfiles = [
            {
                id: "G1",
                name: "Sarah Thompson",
                school: "Stanford University",
                gpa: { unweighted: 3.95, weighted: 4.2, rank: "3/450", ap_ib_dual: "8 APs (7x5, 1x4)" },
                sat_act: { sat: 1570, act: null },
                race: "White",
                gender: "Female",
                extracurriculars: ["Debate Team Captain", "Science Olympiad", "Volunteer at Hospital"],
                awards: ["National Merit Scholar", "Science Fair 1st Place"],
                admissionResults: {
                    acceptances: ["Stanford", "MIT", "Harvard"],
                    waitlists: [],
                    deferrals: [],
                    rejections: []
                }
            },
            {
                id: "G2",
                name: "Michael Garcia",
                school: "UC Berkeley",
                gpa: { unweighted: 3.7, weighted: 3.9, rank: "25/300", ap_ib_dual: "4 APs (3x4, 1x3)" },
                sat_act: { sat: null, act: 31 },
                race: "Hispanic",
                gender: "Male",
                extracurriculars: ["Football Team", "Student Government"],
                awards: ["All-Conference Football"],
                admissionResults: {
                    acceptances: ["UC Berkeley", "UCLA", "UC San Diego"],
                    waitlists: ["Stanford"],
                    deferrals: [],
                    rejections: ["Harvard", "MIT"]
                }
            },
            {
                id: "G3",
                name: "Jennifer Lee",
                school: "Yale University",
                gpa: { unweighted: 4.0, weighted: 4.3, rank: "1/200", ap_ib_dual: "10 APs (all 5s)" },
                sat_act: { sat: 1600, act: null },
                race: "Asian",
                gender: "Female",
                extracurriculars: ["Piano", "Model UN", "Research Internship"],
                awards: ["Intel Science Talent Search Finalist", "Piano Competition Winner"],
                admissionResults: {
                    acceptances: ["Yale", "Harvard", "Princeton", "MIT"],
                    waitlists: [],
                    deferrals: [],
                    rejections: []
                }
            }
        ];

        this.students = [...this.students, ...additionalProfiles];
    }

    addMoreProfiles() {
        const moreProfiles = [
            {
                id: "G4",
                name: "Michael Rodriguez",
                school: "University of Michigan",
                gpa: { unweighted: 3.92, weighted: 4.3, rank: "15/400", ap_ib_dual: "6 APs (5x5, 1x4)" },
                sat_act: { sat: 1520, act: null },
                race: "Latino",
                gender: "Male",
                extracurriculars: ["Varsity Soccer Captain", "Math Club President", "Volunteer at Local Hospital", "Spanish Honor Society"],
                awards: ["National Merit Commended", "All-State Soccer Team", "Math Competition Regional Winner"],
                admissionResults: {
                    acceptances: ["University of Michigan", "University of Illinois", "Purdue University", "Michigan State University"],
                    waitlists: ["Northwestern University"],
                    deferrals: [],
                    rejections: ["MIT", "Stanford", "University of Chicago"]
                },
                intendedMajor: "Computer Science",
                completenessScore: 90
            },
            {
                id: "G5",
                name: "Sarah Johnson",
                school: "Duke University",
                gpa: { unweighted: 3.96, weighted: 4.5, rank: "8/350", ap_ib_dual: "8 APs (7x5, 1x4)" },
                sat_act: { sat: 1550, act: null },
                race: "White",
                gender: "Female",
                extracurriculars: ["Debate Team Captain", "Model UN Secretary General", "Student Council Vice President", "Volunteer at Animal Shelter"],
                awards: ["National Merit Semifinalist", "State Debate Champion", "AP Scholar with Distinction"],
                admissionResults: {
                    acceptances: ["Duke University", "Vanderbilt University", "Emory University", "University of North Carolina"],
                    waitlists: ["Harvard University"],
                    deferrals: [],
                    rejections: ["Yale University", "Princeton University"]
                },
                intendedMajor: "Political Science",
                completenessScore: 95
            },
            {
                id: "G6",
                name: "Kevin Park",
                school: "Northwestern University",
                gpa: { unweighted: 3.88, weighted: 4.2, rank: "25/300", ap_ib_dual: "5 APs (4x5, 1x4)" },
                sat_act: { sat: 1490, act: null },
                race: "Asian",
                gender: "Male",
                extracurriculars: ["Robotics Team Lead", "Jazz Band Trumpet", "Science Olympiad", "Tutoring Program"],
                awards: ["Robotics State Championship", "Jazz Band All-State", "Science Fair 2nd Place"],
                admissionResults: {
                    acceptances: ["Northwestern University", "University of Wisconsin", "University of Minnesota", "Case Western Reserve"],
                    waitlists: ["Carnegie Mellon University"],
                    deferrals: [],
                    rejections: ["MIT", "Stanford University"]
                },
                intendedMajor: "Mechanical Engineering",
                completenessScore: 85
            },
            {
                id: "G7",
                name: "Amanda Thompson",
                school: "University of Virginia",
                gpa: { unweighted: 3.94, weighted: 4.4, rank: "12/280", ap_ib_dual: "7 APs (6x5, 1x4)" },
                sat_act: { sat: 1510, act: null },
                race: "White",
                gender: "Female",
                extracurriculars: ["Varsity Tennis", "Environmental Club President", "National Honor Society", "Peer Tutor"],
                awards: ["Tennis State Qualifier", "Environmental Award", "National Honor Society"],
                admissionResults: {
                    acceptances: ["University of Virginia", "University of North Carolina", "Wake Forest University", "College of William & Mary"],
                    waitlists: ["Duke University"],
                    deferrals: [],
                    rejections: ["Harvard University", "Yale University"]
                },
                intendedMajor: "Environmental Science",
                completenessScore: 88
            },
            {
                id: "G8",
                name: "Marcus Williams",
                school: "Georgia Institute of Technology",
                gpa: { unweighted: 3.85, weighted: 4.1, rank: "30/450", ap_ib_dual: "4 APs (3x5, 1x4)" },
                sat_act: { sat: 1470, act: null },
                race: "African American",
                gender: "Male",
                extracurriculars: ["Football Team", "Engineering Club", "Community Service", "Mentoring Program"],
                awards: ["Football All-Conference", "Engineering Club Award", "Community Service Recognition"],
                admissionResults: {
                    acceptances: ["Georgia Institute of Technology", "Georgia State University", "Kennesaw State University", "University of Georgia"],
                    waitlists: ["Emory University"],
                    deferrals: [],
                    rejections: ["Duke University", "Vanderbilt University"]
                },
                intendedMajor: "Civil Engineering",
                completenessScore: 82
            },
            {
                id: "G9",
                name: "Rachel Kim",
                school: "Rice University",
                gpa: { unweighted: 3.97, weighted: 4.6, rank: "5/200", ap_ib_dual: "9 APs (8x5, 1x4)" },
                sat_act: { sat: 1560, act: null },
                race: "Asian",
                gender: "Female",
                extracurriculars: ["Research Internship", "Piano Performance", "Math Team Captain", "Volunteer at Hospital"],
                awards: ["Research Competition Winner", "Piano Competition State Winner", "Math Team State Champion"],
                admissionResults: {
                    acceptances: ["Rice University", "Washington University in St. Louis", "Emory University", "University of Texas"],
                    waitlists: ["Harvard University"],
                    deferrals: [],
                    rejections: ["MIT", "Stanford University"]
                },
                intendedMajor: "Biomedical Engineering",
                completenessScore: 92
            },
            {
                id: "G10",
                name: "James Wilson",
                school: "University of California Berkeley",
                gpa: { unweighted: 3.89, weighted: 4.3, rank: "18/500", ap_ib_dual: "6 APs (5x5, 1x4)" },
                sat_act: { sat: 1500, act: null },
                race: "White",
                gender: "Male",
                extracurriculars: ["Swimming Team", "Chemistry Club", "Volunteer Firefighter", "Student Government"],
                awards: ["Swimming State Qualifier", "Chemistry Club Award", "Community Service Award"],
                admissionResults: {
                    acceptances: ["University of California Berkeley", "UCLA", "University of California San Diego", "University of California Santa Barbara"],
                    waitlists: ["Stanford University"],
                    deferrals: [],
                    rejections: ["Harvard University", "MIT"]
                },
                intendedMajor: "Chemistry",
                completenessScore: 87
            }
        ];

        this.students = [...this.students, ...moreProfiles];
        
        // Shuffle the array to randomize order
        this.students = this.shuffleArray(this.students);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    setupEventListeners() {
        // Only set up event listeners once
        if (this.eventListenersSetup) {
            return;
        }
        
        const admitBtn = document.getElementById('admit-btn');
        const rejectBtn = document.getElementById('reject-btn');
        const playAgainBtn = document.getElementById('play-again-btn');
        const playBtn = document.getElementById('play-btn');
        const closeDisclaimerBtn = document.getElementById('close-disclaimer');
        const disclaimerModal = document.getElementById('disclaimer-modal');

        admitBtn.addEventListener('click', () => this.makeDecision(true));
        rejectBtn.addEventListener('click', () => this.makeDecision(false));
        playAgainBtn.addEventListener('click', () => this.resetGame());
        playBtn.addEventListener('click', () => this.startGame());
        closeDisclaimerBtn.addEventListener('click', () => this.hideDisclaimer());
        
        // Close modal when clicking outside
        disclaimerModal.addEventListener('click', (e) => {
            if (e.target === disclaimerModal) {
                this.hideDisclaimer();
            }
        });

        // Add touch/swipe support
        this.setupSwipeHandlers();
        
        this.eventListenersSetup = true;
    }

    setupSwipeHandlers() {
        const card = document.getElementById('profile-card');
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;

        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
        });

        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
            
            const deltaX = currentX - startX;
            const deltaY = Math.abs(currentY - startY);
            
            // Only allow horizontal swipes
            if (deltaY < 50) {
                e.preventDefault();
                this.updateCardPosition(deltaX);
            }
        });

        card.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            const threshold = 100;
            
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.makeDecision(true); // Swipe right = admit
                } else {
                    this.makeDecision(false); // Swipe left = reject
                }
            } else {
                this.resetCardPosition();
            }
            
            isDragging = false;
        });

        // Mouse support for desktop
        card.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
            isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            currentX = e.clientX;
            currentY = e.clientY;
            
            const deltaX = currentX - startX;
            const deltaY = Math.abs(currentY - startY);
            
            if (deltaY < 50) {
                e.preventDefault();
                this.updateCardPosition(deltaX);
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            const threshold = 100;
            
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.makeDecision(true);
                } else {
                    this.makeDecision(false);
                }
            } else {
                this.resetCardPosition();
            }
            
            isDragging = false;
        });
    }

    updateCardPosition(deltaX) {
        const card = document.getElementById('profile-card');
        const rotation = deltaX * 0.1;
        const threshold = 100;
        
        // Disable transition during dragging for immediate response
        card.style.transition = 'none';
        card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
        
        // Add opacity feedback based on swipe distance
        const opacity = Math.max(0.7, 1 - Math.abs(deltaX) / 200);
        card.style.opacity = opacity;
        
        // Update visual feedback classes
        if (deltaX > 0) {
            card.classList.add('swiping-right');
            card.classList.remove('swiping-left');
        } else {
            card.classList.add('swiping-left');
            card.classList.remove('swiping-right');
        }
    }

    resetCardPosition() {
        const card = document.getElementById('profile-card');
        // Add transition for smooth bounce back
        card.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-out, opacity 0.3s ease-out';
        card.style.transform = 'translateX(0) rotate(0deg)';
        card.style.opacity = '1';
        card.classList.remove('swiping-left', 'swiping-right');
        
        // Remove transition after animation completes
        setTimeout(() => {
            card.style.transition = '';
        }, 300);
    }

    showHomeScreen() {
        document.getElementById('home-screen').classList.remove('hidden');
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('results-screen').classList.add('hidden');
        document.getElementById('loading-screen').classList.add('hidden');
    }

    startGame() {
        document.getElementById('home-screen').classList.add('hidden');
        this.showLoadingScreen();
        
        
        // Simulate loading time
        setTimeout(() => {
            this.hideLoadingScreen();
            this.loadNextStudent();
        }, 2000);
    }

    showLoadingScreen() {
        document.getElementById('loading-screen').classList.remove('hidden');
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('results-screen').classList.add('hidden');
    }

    hideLoadingScreen() {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
    }

    showDisclaimer() {
        document.getElementById('disclaimer-modal').classList.remove('hidden');
    }
    

    hideDisclaimer() {
        document.getElementById('disclaimer-modal').classList.add('hidden');
    }

    loadNextStudent() {
        if (this.currentIndex >= this.students.length) {
            this.showResults();
            return;
        }

        const student = this.students[this.currentIndex];
        this.displayStudent(student);
        this.updateCardCounter();
    }

    displayStudent(student) {
        // Basic info
        const nameElement = document.getElementById('student-name');
        nameElement.innerHTML = `${student.name}<span class="name-disclaimer" title="This name is artificial to remove personal information">!</span>`;
        
        // Add click event to disclaimer
        const disclaimerElement = nameElement.querySelector('.name-disclaimer');
        disclaimerElement.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showDisclaimer();
        });
        
        document.getElementById('student-school').textContent = student.school || 'High School Student';
        
        // Set college logo based on school
        const logoElement = document.getElementById('college-logo');
        const logoValue = this.getCollegeLogo(student.school);
        
        if (logoValue.startsWith('http')) {
            // It's a URL, create an image element
            logoElement.innerHTML = `<img src="${logoValue}" alt="${student.school} logo" class="college-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"><span class="college-logo-fallback" style="display:none;">🎓</span>`;
        } else {
            // It's an emoji, use text content
            logoElement.textContent = logoValue;
        }

        // Academic stats
        const gpa = student.gpa.unweighted || student.gpa.weighted || 'N/A';
        document.getElementById('gpa').textContent = gpa;

        const testScore = student.sat_act.sat || student.sat_act.act || 'N/A';
        document.getElementById('test-scores').textContent = testScore;

        document.getElementById('rank').textContent = student.gpa.rank || 'N/A';
        document.getElementById('advanced-courses').textContent = student.gpa.ap_ib_dual || 'N/A';

        // Extracurriculars
        const ecContainer = document.getElementById('extracurriculars');
        if (student.extracurriculars && student.extracurriculars.length > 0) {
            ecContainer.innerHTML = student.extracurriculars.map(ec => 
                `<div class="activity-item">${ec}</div>`
            ).join('');
        } else {
            ecContainer.innerHTML = '<p class="no-data">No data available</p>';
        }

        // Awards
        const awardsContainer = document.getElementById('awards');
        if (student.awards && student.awards.length > 0) {
            awardsContainer.innerHTML = student.awards.map(award => 
                `<div class="award-item">${award}</div>`
            ).join('');
        } else {
            awardsContainer.innerHTML = '<p class="no-data">No data available</p>';
        }

        // Intended Major
        const majorSection = document.getElementById('major-section');
        const intendedMajor = document.getElementById('intended-major');
        if (student.intendedMajor) {
            intendedMajor.textContent = student.intendedMajor;
            majorSection.style.display = 'block';
        } else {
            majorSection.style.display = 'none';
        }

        // Demographics
        document.getElementById('race').textContent = student.race || 'Not specified';
        document.getElementById('gender').textContent = student.gender || 'Not specified';
    }

    updateCardCounter() {
        document.getElementById('card-counter').textContent = this.currentIndex + 1;
        document.getElementById('total-cards').textContent = this.students.length;
    }

    getCollegeLogo(schoolName) {
        const logoMap = {
            // Ivy League - Using official logo URLs (fair use for educational purposes)
            'Harvard University': 'https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg',
            'Yale University': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_Shield_1.svg',
            'Princeton University': 'https://upload.wikimedia.org/wikipedia/en/d/d4/Princeton_seal.svg',
            'Columbia University': 'https://upload.wikimedia.org/wikipedia/en/f/f2/Columbia_University_seal.svg',
            'Brown University': 'https://upload.wikimedia.org/wikipedia/en/4/4f/Brown_University_shield.svg',
            'Dartmouth College': 'https://upload.wikimedia.org/wikipedia/en/2/2b/Dartmouth_College_shield.svg',
            'Cornell University': 'https://upload.wikimedia.org/wikipedia/en/4/4b/Cornell_University_seal.svg',
            'University of Pennsylvania': 'https://upload.wikimedia.org/wikipedia/en/4/4e/University_of_Pennsylvania_shield.svg',
            
            // Top Tech/Science
            'MIT': 'https://upload.wikimedia.org/wikipedia/en/4/44/MIT_Seal.svg',
            'Stanford University': 'https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg',
            'California Institute of Technology': 'https://upload.wikimedia.org/wikipedia/en/3/34/Caltech_seal.svg',
            'Carnegie Mellon University': 'https://upload.wikimedia.org/wikipedia/en/c/c7/Carnegie_Mellon_University_seal.svg',
            
            // Top Private Universities
            'University of Chicago': 'https://upload.wikimedia.org/wikipedia/en/8/89/University_of_Chicago_shield.svg',
            'Duke University': 'https://upload.wikimedia.org/wikipedia/en/e/e6/Duke_University_logo.svg',
            'Northwestern University': 'https://upload.wikimedia.org/wikipedia/en/6/6a/Northwestern_University_seal.svg',
            'Vanderbilt University': 'https://upload.wikimedia.org/wikipedia/en/5/5b/Vanderbilt_University_seal.svg',
            'Rice University': 'https://upload.wikimedia.org/wikipedia/en/1/1a/Rice_University_seal.svg',
            'Washington University': 'https://upload.wikimedia.org/wikipedia/en/4/42/Washington_University_in_St._Louis_seal.svg',
            'Emory University': 'https://upload.wikimedia.org/wikipedia/en/6/68/Emory_University_seal.svg',
            'Georgetown University': 'https://upload.wikimedia.org/wikipedia/en/1/1a/Georgetown_University_Seal.svg',
            'Tufts University': 'https://upload.wikimedia.org/wikipedia/en/4/4c/Tufts_University_seal.svg',
            'New York University': 'https://upload.wikimedia.org/wikipedia/en/b/be/New_York_University_Seal.svg',
            'University of Southern California': 'https://upload.wikimedia.org/wikipedia/en/5/50/University_of_Southern_California_seal.svg',
            'Boston University': 'https://upload.wikimedia.org/wikipedia/en/5/54/Boston_University_seal.svg',
            'Northeastern University': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Northeastern_University_seal.svg',
            
            // Top Public Universities
            'UC Berkeley': 'https://upload.wikimedia.org/wikipedia/en/a/a1/Seal_of_University_of_California%2C_Berkeley.svg',
            'UCLA': 'https://upload.wikimedia.org/wikipedia/en/c/cd/UCLA_Bruins_logo.svg',
            'University of Michigan': 'https://upload.wikimedia.org/wikipedia/en/4/44/University_of_Michigan_seal.svg',
            'University of Virginia': 'https://upload.wikimedia.org/wikipedia/en/7/70/University_of_Virginia_seal.svg',
            'University of North Carolina': 'https://upload.wikimedia.org/wikipedia/en/6/6b/University_of_North_Carolina_at_Chapel_Hill_seal.svg',
            'University of California San Diego': 'https://upload.wikimedia.org/wikipedia/en/8/8e/UC_San_Diego_seal.svg',
            'University of California Irvine': 'https://upload.wikimedia.org/wikipedia/en/8/8d/UC_Irvine_seal.svg',
            'University of California Davis': 'https://upload.wikimedia.org/wikipedia/en/8/8c/UC_Davis_seal.svg',
            'University of California Santa Barbara': 'https://upload.wikimedia.org/wikipedia/en/8/8f/UC_Santa_Barbara_seal.svg',
            'University of Wisconsin': 'https://upload.wikimedia.org/wikipedia/en/7/7e/University_of_Wisconsin%E2%80%93Madison_seal.svg',
            'University of Illinois': 'https://upload.wikimedia.org/wikipedia/en/3/3b/University_of_Illinois_seal.svg',
            'Ohio State University': 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Ohio_State_University_seal.svg',
            'Penn State University': 'https://upload.wikimedia.org/wikipedia/en/6/6f/Pennsylvania_State_University_seal.svg',
            'University of Florida': 'https://upload.wikimedia.org/wikipedia/en/3/32/University_of_Florida_seal.svg',
            'University of Texas': 'https://upload.wikimedia.org/wikipedia/en/a/a2/University_of_Texas_at_Austin_seal.svg',
            'Georgia Institute of Technology': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Georgia_Tech_seal.svg',
            'Case Western Reserve University': 'https://upload.wikimedia.org/wikipedia/en/4/4b/Case_Western_Reserve_University_seal.svg',
            
            // Other Notable
            'Wake Forest University': 'https://upload.wikimedia.org/wikipedia/en/8/8a/Wake_Forest_University_seal.svg',
            'University of Rochester': 'https://upload.wikimedia.org/wikipedia/en/5/5d/University_of_Rochester_seal.svg',
            'Brandeis University': 'https://upload.wikimedia.org/wikipedia/en/b/b0/Brandeis_University_seal.svg',
            'Johns Hopkins University': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Johns_Hopkins_University_seal.svg',
            'University of Notre Dame': 'https://upload.wikimedia.org/wikipedia/en/4/44/University_of_Notre_Dame_seal.svg',
            'University of Miami': 'https://upload.wikimedia.org/wikipedia/en/8/8e/University_of_Miami_seal.svg',
            'Tulane University': 'https://upload.wikimedia.org/wikipedia/en/8/8c/Tulane_University_seal.svg',
            'University of Washington': 'https://upload.wikimedia.org/wikipedia/en/5/54/University_of_Washington_seal.svg',
            'University of Oregon': 'https://upload.wikimedia.org/wikipedia/en/8/8a/University_of_Oregon_seal.svg',
            'University of California Berkeley': 'https://upload.wikimedia.org/wikipedia/en/a/a1/Seal_of_University_of_California%2C_Berkeley.svg',
            'University of California Los Angeles': 'https://upload.wikimedia.org/wikipedia/en/c/cd/UCLA_Bruins_logo.svg'
        };

        // Find the best match for the school name
        for (const [key, logo] of Object.entries(logoMap)) {
            if (schoolName && schoolName.includes(key)) {
                return logo;
            }
        }

        // Default logo if no match found
        return '🎓';
    }

    makeDecision(admit) {
        // Prevent multiple simultaneous decisions
        if (this.isMakingDecision) {
            console.log('Decision already in progress, ignoring duplicate call');
            return;
        }
        
        console.log(`Making decision: ${admit ? 'ADMIT' : 'REJECT'} for student ${this.currentIndex + 1}`);
        this.isMakingDecision = true;
        
        const student = this.students[this.currentIndex];
        const actualResult = this.determineActualDecision(student);
        
        // Determine if user decision was correct
        // User is acting as an admission officer deciding whether to admit this student
        // "Admit" means: "I would admit this student" 
        // "Reject" means: "I would not admit this student"
        
        let isCorrect;
        if (admit) {
            // User clicked "Admit" - correct if the student had successful results (>50% acceptance rate)
            isCorrect = (actualResult === 'accept');
        } else {
            // User clicked "Reject" - correct if the student had unsuccessful results (≤50% acceptance rate)
            isCorrect = (actualResult === 'reject' || actualResult === 'waitlist');
        }
        
        
        this.userDecisions.push({
            student: student,
            userDecision: admit,
            actualResult: actualResult,
            isCorrect: isCorrect
        });

        this.totalDecisions++;
        if (isCorrect) {
            this.correctDecisions++;
            this.score += 10;
        } else {
            this.score = Math.max(0, this.score - 5);
        }

        this.updateStats();
        this.showFeedback(isCorrect, admit);
        
        setTimeout(() => {
            this.currentIndex++;
            this.isMakingDecision = false;
            this.loadNextStudent();
        }, 1500);
    }

    determineActualDecision(student) {
        // Determine admission status based on whether student got into selective schools
        // This simulates being an admission officer at a competitive college
        
        const selectiveSchools = ['Harvard', 'Princeton', 'Yale', 'Stanford', 'MIT', 'Columbia', 'UPenn', 'Duke', 'Northwestern', 'Caltech', 'Berkeley', 'UCLA', 'UCSD', 'UNC', 'Southern California'];
        
        // Check if student got into any selective schools
        const gotIntoSelective = student.admissionResults.acceptances.some(school => 
            selectiveSchools.some(selective => school.includes(selective))
        );
        
        // Check if student got rejected from selective schools
        const rejectedFromSelective = student.admissionResults.rejections.some(school => 
            selectiveSchools.some(selective => school.includes(selective))
        );
        
        if (gotIntoSelective) {
            return 'accept'; // Student was competitive enough for selective schools
        } else if (rejectedFromSelective && student.admissionResults.acceptances.length === 0) {
            return 'reject'; // Student was rejected from selective schools and got no acceptances
        } else {
            return 'waitlist'; // Mixed results - got some acceptances but not from most selective schools
        }
    }

    showFeedback(isCorrect, userDecision) {
        const feedback = document.getElementById('feedback-text');
        
        // Get the actual result for the current student
        const student = this.students[this.currentIndex];
        const actualResult = this.determineActualDecision(student);
        const wasActuallyAdmitted = actualResult === 'accept';
        
        
        // Show what actually happened, with correct/incorrect prefix
        let actualOutcome;
        if (actualResult === 'accept') {
            actualOutcome = 'admitted';
        } else if (actualResult === 'waitlist') {
            actualOutcome = 'waitlisted/deferred';
        } else {
            actualOutcome = 'not admitted';
        }
        
        feedback.textContent = isCorrect ? 
            `✅ Correct! Student was ${actualOutcome}.` : 
            `❌ Incorrect! Student was ${actualOutcome}.`;
        
        feedback.className = `feedback-text show ${isCorrect ? 'correct' : 'incorrect'}`;
        
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 1500);
    }

    updateStats() {
        document.getElementById('score').textContent = this.score;
        const accuracy = this.totalDecisions > 0 ? Math.round((this.correctDecisions / this.totalDecisions) * 100) : 0;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
    }

    showResults() {
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('results-screen').classList.remove('hidden');

        const accuracy = this.totalDecisions > 0 ? Math.round((this.correctDecisions / this.totalDecisions) * 100) : 0;
        
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-accuracy').textContent = `${accuracy}%`;
        document.getElementById('total-decisions').textContent = this.totalDecisions;
        document.getElementById('correct-count').textContent = this.correctDecisions;
        document.getElementById('incorrect-count').textContent = this.totalDecisions - this.correctDecisions;
    }

    resetGame() {
        this.currentIndex = 0;
        this.score = 0;
        this.totalDecisions = 0;
        this.correctDecisions = 0;
        this.userDecisions = [];
        
        // Shuffle students again
        this.students = this.shuffleArray(this.students);
        
        this.updateStats();
        this.showHomeScreen();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing game...');
        const game = new CollegeAdmissionsGame();
        console.log('Game initialized successfully');
    } catch (error) {
        console.error('Error initializing game:', error);
        // Show error message to user
        document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Error Loading Game</h1><p>There was an error loading the game. Please refresh the page.</p><p>Error: ' + error.message + '</p></div>';
    }
});
