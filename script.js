document.getElementById("btnEfeito").addEventListener("click", function() {
    document.getElementById("efeitosDetalhados").innerHTML = `
        <h3>Efeitos do THC:</h3>
        <ul>
            <li>Aumento da percepção sensorial (cores, sons, etc.)</li>
            <li>Euforia, sensação de relaxamento</li>
            <li>Aumento do apetite ("fome de leão")</li>
            <li>Alterações na coordenação motora</li>
        </ul>
        <h3>Efeitos do CBD:</h3>
        <ul>
            <li>Redução de ansiedade e estresse</li>
            <li>Propriedades anti-inflamatórias</li>
            <li>Alívio de dores crônicas</li>
            <li>Melhora no sono e relaxamento muscular</li>
        </ul>
    `;
});

document.getElementById("btnMedicinal").addEventListener("click", function() {
    document.getElementById("detalhesMedicinais").innerHTML = `
        <h3>Estudos Científicos</h3>
        <p>A cannabis tem sido estudada por suas propriedades terapêuticas em diversas condições...</p>
    `;
});

document.getElementById("btnLegalizacao").addEventListener("click", function() {
    document.getElementById("legalizados").innerHTML = `
        <h3>Status da Legalização</h3>
        <p><strong>Estados Unidos:</strong> Legal em vários estados, como Califórnia, Colorado, e outros.</p>
        <p><strong>Canadá:</strong> Legal em todo o país desde 2018.</p>
        <p><strong>Uruguai:</strong> Legal desde 2013, sendo o primeiro país a legalizar a cannabis totalmente.</p>
        <p><strong>Países Baixos:</strong> Cannabis é tolerada para consumo em coffee shops desde 1976.</p>
        <p><strong>Brasil:</strong> Ainda não legalizada, mas com avanço em pesquisas e discussões sobre a regulamentação medicinal.</p>
    `;
});
