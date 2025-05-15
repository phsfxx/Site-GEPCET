class MemberCard {
    constructor(member) {
        this.member = member;
    }

    render() {
        return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <div class="card member-card h-100 w-100" data-toggle="modal" data-target="#${this.member.id}Modal">
                    <div class="card-body text-center d-flex flex-column align-items-center justify-content-start">
                        <img src="${this.member.image}" alt="${this.member.name}" class="member-image">
                        <h3>${this.member.name}</h3>
                        <p class="text-muted">${this.member.role}</p>
                        <p class="member-summary">${this.member.shortDescription}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

class MemberModal {
    constructor(member) {
        this.member = member;
    }

    render() {
            return `
            <div class="modal fade" id="${this.member.id}Modal" tabindex="-1" role="dialog" aria-labelledby="${this.member.id}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${this.member.id}ModalLabel">${this.member.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start">
                                <div class="col-12 col-md-4 text-center mb-3 mb-md-0">
                                    <img src="${this.member.image}" alt="${this.member.name}" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-8 text-center text-md-left">
                                    <h3>${this.member.fullName}</h3>
                                    <p class="text-muted">${this.member.role}</p>
                                    ${this.member.email ? `
                                    <a href="mailto:${this.member.email}" class="btn btn-outline-primary btn-block mb-3" style="max-width:320px;word-break:break-all;">
                                        <i class="fas fa-envelope"></i> E-mail institucional
                                    </a>
                                    ` : ''}
                                    <p class="mb-3">${this.member.shortDescription}</p>
                                    <div class="academic-info">
                                        <h4>Formação Acadêmica</h4>
                                        <ul>
                                            ${this.member.academicFormation.map(formation => 
                                                `<li>${formation}</li>`
                                            ).join('')}
                                        </ul>

                                        <h4>Áreas de Atuação</h4>
                                        <ul>
                                            ${this.member.areas.map(area => 
                                                `<li>${area}</li>`
                                            ).join('')}
                                        </ul>

                                        <a href="${this.member.lattesUrl}" target="_blank" class="lattes-link">
                                            <i class="fas fa-external-link-alt"></i> Currículo Lattes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Exportando as classes
window.MemberCard = MemberCard;
window.MemberModal = MemberModal;